/**
 * GET /api/wecom/decrypttest?echostr=<base64>
 *
 * Accepts an already-encrypted echostr (base64) and decrypts it server-side,
 * returning every intermediate value. Used to pinpoint CorpID mismatch.
 *
 * DELETE before production.
 */
import { NextRequest, NextResponse } from 'next/server';
import { createDecipheriv } from 'crypto';

const RAW_AES_KEY = process.env.WECOM_ENCODING_AES_KEY || '';
const CORP_ID     = (process.env.WECOM_CORP_ID || '').trim();

function decodeKey(k: string): Buffer {
  const cleaned = k.trim().replace(/=+$/, '');
  return Buffer.from(cleaned + '=', 'base64');
}

function pkcs7Unpad(buf: Buffer): Buffer {
  const pad = buf[buf.length - 1];
  return buf.subarray(0, buf.length - (pad < 1 || pad > 32 ? 0 : pad)) as Buffer;
}

export async function GET(request: NextRequest) {
  const echostr = request.nextUrl.searchParams.get('echostr') || '';

  if (!echostr) {
    return NextResponse.json({ error: 'missing echostr param' }, { status: 400 });
  }

  try {
    const aesKey = decodeKey(RAW_AES_KEY);
    const iv     = aesKey.subarray(0, 16);

    const cipherBuf = Buffer.from(echostr, 'base64');
    const decipher  = createDecipheriv('aes-256-cbc', aesKey, iv);
    decipher.setAutoPadding(false);
    let dec = Buffer.concat([decipher.update(cipherBuf), decipher.final()]);
    dec = pkcs7Unpad(dec);

    const msgLen      = dec.subarray(16, 20).readUInt32BE(0);
    const decMsg      = dec.subarray(20, 20 + msgLen).toString('utf8');
    const decCorpRaw  = dec.subarray(20 + msgLen).toString('utf8');
    const decCorpClean = decCorpRaw.replace(/\0/g, '').trim();

    return NextResponse.json({
      echostr_received_length: echostr.length,
      echostr_first_40:        echostr.substring(0, 40),
      decrypted_msg:           decMsg,
      corpId_from_decrypt:     decCorpClean,
      corpId_from_decrypt_hex: Buffer.from(decCorpClean).toString('hex'),
      corpId_env:              CORP_ID,
      corpId_env_hex:          Buffer.from(CORP_ID).toString('hex'),
      match:                   decCorpClean === CORP_ID,
    });

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
