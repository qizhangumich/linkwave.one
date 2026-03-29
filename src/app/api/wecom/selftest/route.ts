/**
 * GET /api/wecom/selftest
 *
 * Runs a full encrypt → decrypt round-trip on the SERVER using the actual
 * live env vars. Returns every intermediate value so we can see exactly
 * where a mismatch occurs.
 *
 * DELETE THIS ROUTE before going to production.
 */
import { NextResponse } from 'next/server';
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const RAW_TOKEN    = process.env.WECOM_TOKEN            || '';
const RAW_AES_KEY  = process.env.WECOM_ENCODING_AES_KEY || '';
const RAW_CORP_ID  = process.env.WECOM_CORP_ID          || '';

const TOKEN   = RAW_TOKEN.trim();
const CORP_ID = RAW_CORP_ID.trim();

function decodeKey(k: string): Buffer {
  const cleaned = k.trim().replace(/=+$/, '');
  return Buffer.from(cleaned + '=', 'base64');
}

function pkcs7Pad(buf: Buffer, blockSize = 32): Buffer {
  const padLen = blockSize - (buf.length % blockSize);
  return Buffer.concat([buf, Buffer.alloc(padLen, padLen)]);
}

function pkcs7Unpad(buf: Buffer): Buffer {
  const pad = buf[buf.length - 1];
  return buf.subarray(0, buf.length - (pad < 1 || pad > 32 ? 0 : pad)) as Buffer;
}

export async function GET() {
  try {
    const aesKey = decodeKey(RAW_AES_KEY);
    const iv     = aesKey.subarray(0, 16);

    // ── ENCRYPT (simulate WeCom) ──────────────────────────────────────
    const plainMsg  = 'test_echo_12345';
    const random    = randomBytes(16);
    const msgBuf    = Buffer.from(plainMsg, 'utf8');
    const lenBuf    = Buffer.alloc(4);
    lenBuf.writeUInt32BE(msgBuf.length, 0);
    const corpIdBuf = Buffer.from(CORP_ID, 'utf8');

    const plaintext = Buffer.concat([random, lenBuf, msgBuf, corpIdBuf]);
    const padded    = pkcs7Pad(plaintext);

    const cipher    = createCipheriv('aes-256-cbc', aesKey, iv);
    cipher.setAutoPadding(false);
    const encrypted = Buffer.concat([cipher.update(padded), cipher.final()]).toString('base64');

    // ── DECRYPT (same as route.ts) ────────────────────────────────────
    const decipher  = createDecipheriv('aes-256-cbc', aesKey, iv);
    decipher.setAutoPadding(false);
    let dec = Buffer.concat([decipher.update(Buffer.from(encrypted, 'base64')), decipher.final()]);
    dec = pkcs7Unpad(dec);

    const msgLen    = dec.subarray(16, 20).readUInt32BE(0);
    const decMsg    = dec.subarray(20, 20 + msgLen).toString('utf8');
    const decCorpId = dec.subarray(20 + msgLen).toString('utf8');

    const corpIdMatch = decCorpId.replace(/\0/g, '').trim() === CORP_ID;

    return NextResponse.json({
      aes_key_byte_length:     aesKey.length,
      iv_hex:                  Buffer.from(iv).toString('hex'),
      plainMsg_original:       plainMsg,
      plainMsg_decrypted:      decMsg,
      msg_match:               decMsg === plainMsg,
      corpId_env:              CORP_ID,
      corpId_env_bytes:        Buffer.from(CORP_ID).toString('hex'),
      corpId_decrypted_raw:    decCorpId,
      corpId_decrypted_bytes:  Buffer.from(decCorpId).toString('hex'),
      corpId_decrypted_len:    decCorpId.length,
      corpId_match:            corpIdMatch,
      overall: corpIdMatch && decMsg === plainMsg ? '✅ CRYPTO OK' : '❌ CRYPTO BROKEN',
    });

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
