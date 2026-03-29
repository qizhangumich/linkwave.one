import { NextRequest, NextResponse } from 'next/server';
import { createHash, createDecipheriv } from 'crypto';

// =====================================================
// 环境变量 — always .trim() to guard against invisible
// trailing newlines (\n) from copy-pasting into Vercel UI
// =====================================================
const WECOM_TOKEN            = (process.env.WECOM_TOKEN            || '').trim();
const WECOM_ENCODING_AES_KEY = (process.env.WECOM_ENCODING_AES_KEY || '').trim();
const WECOM_CORP_ID          = (process.env.WECOM_CORP_ID          || '').trim();

// =====================================================
// 辅助函数：SHA1 签名
// =====================================================
function sha1Signature(token: string, timestamp: string, nonce: string, encrypt: string): string {
  const arr = [token, timestamp, nonce, encrypt].sort();
  const str = arr.join('');
  return createHash('sha1').update(str, 'utf8').digest('hex');
}

// =====================================================
// 辅助函数：验证签名
// =====================================================
function verifySignature(
  token: string,
  timestamp: string,
  nonce: string,
  encrypt: string,
  signature: string
): boolean {
  const computed = sha1Signature(token, timestamp, nonce, encrypt);
  return computed === signature;
}

// =====================================================
// 辅助函数：解码 Base64 AES Key
// =====================================================
function decodeBase64AesKey(encodingAesKey: string): Buffer {
  const cleaned = encodingAesKey.trim().replace(/=+$/, '');
  const base64  = cleaned + '=';
  return Buffer.from(base64, 'base64');
}

// =====================================================
// 辅助函数：PKCS#7 unpadding
// =====================================================
function pkcs7Unpadding(buffer: Buffer): Buffer {
  let pad = buffer[buffer.length - 1];
  if (pad < 1 || pad > 32) pad = 0;
  return buffer.subarray(0, buffer.length - pad) as Buffer;
}

// =====================================================
// 辅助函数：AES-CBC 解密
// IV = first 16 bytes of AES key (WeCom spec)
// =====================================================
function decryptWeComMessage(
  encrypt: string,
  encodingAesKey: string
): { msg: string; corpId: string } {
  const aesKey = decodeBase64AesKey(encodingAesKey);
  const iv     = aesKey.subarray(0, 16);                    // ✅ first 16 bytes only

  const cipherText = Buffer.from(encrypt, 'base64');

  const decipher = createDecipheriv('aes-256-cbc', aesKey, iv);
  decipher.setAutoPadding(false);

  let decrypted: Buffer = Buffer.concat([
    decipher.update(cipherText),
    decipher.final(),
  ]);
  decrypted = pkcs7Unpadding(decrypted);

  // Format: 16-byte random | 4-byte msg_len (big-endian) | msg | corpId
  const msgLen = decrypted.subarray(16, 20).readUInt32BE(0);
  const msg    = decrypted.subarray(20, 20 + msgLen).toString('utf8');
  const corpId = decrypted.subarray(20 + msgLen).toString('utf8')
    .replace(/\0/g, '').trim();

  return { msg, corpId };
}

// =====================================================
// 辅助函数：从 XML 提取字段
// =====================================================
function extractEncryptFromXml(xml: string): string {
  const match = xml.match(/<Encrypt>(<!\[CDATA\[)?([\s\S]*?)(\]\]>)?<\/Encrypt>/);
  return match ? match[2].trim() : '';
}

function extractContentFromXml(xml: string): string {
  const match = xml.match(/<Content>(<!\[CDATA\[)?([\s\S]*?)(\]\]>)?<\/Content>/);
  return match ? match[2].trim() : '';
}

function extractMsgTypeFromXml(xml: string): string {
  const match = xml.match(/<MsgType>(<!\[CDATA\[)?([\s\S]*?)(\]\]>)?<\/MsgType>/);
  return match ? match[2].trim() : '';
}

function extractFromUserFromXml(xml: string): string {
  const match = xml.match(/<FromUserName>(<!\[CDATA\[)?([\s\S]*?)(\]\]>)?<\/FromUserName>/);
  return match ? match[2].trim() : '';
}

// =====================================================
// GET: URL 验证
// =====================================================
export async function GET(request: NextRequest) {
  const searchParams   = request.nextUrl.searchParams;
  const msg_signature  = searchParams.get('msg_signature') || '';
  const timestamp      = searchParams.get('timestamp')     || '';
  const nonce          = searchParams.get('nonce')         || '';
  const echostr        = searchParams.get('echostr')       || '';

  // Log every incoming param so we can debug via Vercel dashboard
  console.log('=== WeCom GET Verification ===');
  console.log('msg_signature :', msg_signature);
  console.log('timestamp     :', timestamp);
  console.log('nonce         :', nonce);
  console.log('echostr(50)   :', echostr.substring(0, 50));
  console.log('TOKEN set     :', !!WECOM_TOKEN, WECOM_TOKEN.length, 'chars');
  console.log('AES_KEY set   :', !!WECOM_ENCODING_AES_KEY, WECOM_ENCODING_AES_KEY.length, 'chars');
  console.log('CORP_ID set   :', !!WECOM_CORP_ID, JSON.stringify(WECOM_CORP_ID));

  // 1. Check env vars
  if (!WECOM_TOKEN || !WECOM_ENCODING_AES_KEY || !WECOM_CORP_ID) {
    console.error('❌ Missing env vars');
    return new NextResponse('Server configuration error', { status: 500 });
  }

  // 2. Check params
  if (!msg_signature || !timestamp || !nonce || !echostr) {
    console.error('❌ Missing query params');
    return new NextResponse('Missing parameters', { status: 400 });
  }

  try {
    // 3. Verify signature
    const computed = sha1Signature(WECOM_TOKEN, timestamp, nonce, echostr);
    console.log('computed sig  :', computed);
    console.log('received sig  :', msg_signature);
    console.log('sig match     :', computed === msg_signature);

    if (computed !== msg_signature) {
      console.error('❌ Signature mismatch');
      return new NextResponse('Signature verification failed', { status: 401 });
    }

    // 4. Decrypt echostr
    const { msg: decryptedMsg, corpId } = decryptWeComMessage(echostr, WECOM_ENCODING_AES_KEY);
    console.log('decrypted msg :', decryptedMsg);
    console.log('corpId decrypt:', JSON.stringify(corpId));
    console.log('corpId env    :', JSON.stringify(WECOM_CORP_ID));
    console.log('corpId match  :', corpId === WECOM_CORP_ID);

    // 5. Verify CorpID
    if (corpId !== WECOM_CORP_ID) {
      console.error('❌ CorpID mismatch — got:', corpId, 'expected:', WECOM_CORP_ID);
      return new NextResponse('CorpID mismatch', { status: 401 });
    }

    console.log('✅ Verification SUCCESS — returning:', decryptedMsg);
    // CRITICAL: return plain text with no extra whitespace or quotes
    return new NextResponse(decryptedMsg, {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });

  } catch (error) {
    console.error('❌ Decryption error:', error);
    return new NextResponse('Decryption failed', { status: 500 });
  }
}

// =====================================================
// POST: 接收消息
// =====================================================
export async function POST(request: NextRequest) {
  const searchParams  = request.nextUrl.searchParams;
  const msg_signature = searchParams.get('msg_signature') || '';
  const timestamp     = searchParams.get('timestamp')     || '';
  const nonce         = searchParams.get('nonce')         || '';

  if (!WECOM_TOKEN || !WECOM_ENCODING_AES_KEY || !WECOM_CORP_ID) {
    console.error('❌ Missing env vars in POST');
    // Still return success so WeCom doesn't retry endlessly
    return new NextResponse('success', { status: 200, headers: { 'Content-Type': 'text/plain' } });
  }

  if (!msg_signature || !timestamp || !nonce) {
    return new NextResponse('success', { status: 200, headers: { 'Content-Type': 'text/plain' } });
  }

  try {
    const rawBody = await request.text();
    console.log('=== WeCom POST ===');
    console.log('body(200):', rawBody.substring(0, 200));

    const encrypt = extractEncryptFromXml(rawBody);
    if (!encrypt) {
      console.error('No <Encrypt> in body');
      return new NextResponse('success', { status: 200, headers: { 'Content-Type': 'text/plain' } });
    }

    if (!verifySignature(WECOM_TOKEN, timestamp, nonce, encrypt, msg_signature)) {
      console.error('POST signature failed');
      return new NextResponse('success', { status: 200, headers: { 'Content-Type': 'text/plain' } });
    }

    const { msg: decryptedXml } = decryptWeComMessage(encrypt, WECOM_ENCODING_AES_KEY);
    console.log('Decrypted XML:', decryptedXml);

    const msgType = extractMsgTypeFromXml(decryptedXml);
    if (msgType !== 'text') {
      console.log('Non-text msgType:', msgType);
      return new NextResponse('success', { status: 200, headers: { 'Content-Type': 'text/plain' } });
    }

    const content  = extractContentFromXml(decryptedXml);
    const fromUser = extractFromUserFromXml(decryptedXml);
    console.log('From:', fromUser, '| Content:', content);

    // TODO Step 1: extract URLs and save to Notion
    // await processMessage(content);

  } catch (error) {
    console.error('POST error:', error);
  }

  // Always return "success" to WeCom
  return new NextResponse('success', { status: 200, headers: { 'Content-Type': 'text/plain' } });
}
