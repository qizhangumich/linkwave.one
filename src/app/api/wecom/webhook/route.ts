import { NextRequest, NextResponse } from 'next/server';
import { createHash, createDecipheriv } from 'crypto';

// =====================================================
// 环境变量
// =====================================================
const WECOM_TOKEN = process.env.WECOM_TOKEN || '';
const WECOM_ENCODING_AES_KEY = process.env.WECOM_ENCODING_AES_KEY || '';
const WECOM_CORP_ID = process.env.WECOM_CORP_ID || '';

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
// 企业微信的 EncodingAESKey 是 43 字符，需要补 '=' 后解码
// =====================================================
function decodeBase64AesKey(encodingAesKey: string): Buffer {
  const base64 = encodingAesKey + '=';
  return Buffer.from(base64, 'base64');
}

// =====================================================
// 辅助函数：PKCS#7 unpadding
// =====================================================
function pkcs7Unpadding(buffer: Uint8Array): Uint8Array {
  let pad = buffer[buffer.length - 1];
  if (pad < 1 || pad > 32) {
    pad = 0;
  }
  return buffer.subarray(0, buffer.length - pad);
}

// =====================================================
// 辅助函数：AES-CBC 解密企业微信消息
// 返回: { msg: string, corpId: string }
// =====================================================
function decryptWeComMessage(encrypt: string, encodingAesKey: string): { msg: string; corpId: string } {
  const aesKey = decodeBase64AesKey(encodingAesKey);

  // IV = AES Key (企业微信规定)
  const iv = aesKey;

  // Base64 解密
  const cipherText = Buffer.from(encrypt, 'base64');

  // AES-256-CBC 解密
  const decipher = createDecipheriv('aes-256-cbc', aesKey, iv);
  decipher.setAutoPadding(false);

  let decrypted: Uint8Array = Buffer.concat([
    decipher.update(cipherText),
    decipher.final()
  ]);

  // 移除 PKCS#7 padding
  decrypted = pkcs7Unpadding(decrypted);

  // 解析格式: 16字节random + 4字节msg_len + msg + corpId
  const msgLenBuf = Buffer.from(decrypted.subarray(16, 20));
  const msgLen = msgLenBuf.readUInt32BE(0);
  const msg = Buffer.from(decrypted.subarray(20, 20 + msgLen)).toString('utf8');
  const corpId = Buffer.from(decrypted.subarray(20 + msgLen)).toString('utf8');

  return { msg, corpId };
}

// =====================================================
// 辅助函数：从 XML 中提取 Encrypt 字段
// =====================================================
function extractEncryptFromXml(xml: string): string {
  const match = xml.match(/<Encrypt>(<!\[CDATA\[)?(.*?)(\]\]>)?<\/Encrypt>/s);
  return match ? match[2] : '';
}

// =====================================================
// GET: URL 验证
// =====================================================
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const msg_signature = searchParams.get('msg_signature');
  const timestamp = searchParams.get('timestamp');
  const nonce = searchParams.get('nonce');
  const echostr = searchParams.get('echostr');

  // 详细日志 - 调试用
  console.log('=== WeCom Webhook GET Request ===');
  console.log('msg_signature:', msg_signature);
  console.log('timestamp:', timestamp);
  console.log('nonce:', nonce);
  console.log('echostr:', echostr?.substring(0, 50) + '...');
  console.log('WECOM_TOKEN:', WECOM_TOKEN ? 'SET (' + WECOM_TOKEN + ')' : 'MISSING');
  console.log('WECOM_ENCODING_AES_KEY:', WECOM_ENCODING_AES_KEY ? 'SET (' + WECOM_ENCODING_AES_KEY.length + ' chars)' : 'MISSING');
  console.log('WECOM_CORP_ID:', WECOM_CORP_ID ? 'SET (' + WECOM_CORP_ID + ')' : 'MISSING');

  // 检查环境变量
  if (!WECOM_TOKEN || !WECOM_ENCODING_AES_KEY || !WECOM_CORP_ID) {
    console.error('Missing WeCom environment variables');
    return new NextResponse('Server configuration error', { status: 500 });
  }

  // 检查必需参数
  if (!msg_signature || !timestamp || !nonce || !echostr) {
    console.error('Missing parameters');
    return new NextResponse('Missing parameters', { status: 400 });
  }

  try {
    // 计算签名用于调试
    const computedSignature = sha1Signature(WECOM_TOKEN, timestamp, nonce, echostr);
    console.log('Expected signature:', computedSignature);
    console.log('Received signature:', msg_signature);
    console.log('Signature match:', computedSignature === msg_signature);

    // 验证签名
    const signatureValid = verifySignature(
      WECOM_TOKEN,
      timestamp,
      nonce,
      echostr,
      msg_signature
    );

    if (!signatureValid) {
      console.error('Signature verification failed');
      return new NextResponse('Signature verification failed', { status: 401 });
    }

    // 解密 echostr
    const { msg: decryptedMsg, corpId } = decryptWeComMessage(echostr, WECOM_ENCODING_AES_KEY);

    console.log('Decrypted msg:', decryptedMsg);
    console.log('Decrypted CorpID:', corpId);
    console.log('Expected CorpID:', WECOM_CORP_ID);
    console.log('CorpID match:', corpId === WECOM_CORP_ID);

    // 验证 CorpID
    if (corpId !== WECOM_CORP_ID) {
      console.error('CorpID mismatch');
      return new NextResponse('CorpID mismatch', { status: 401 });
    }

    console.log('WeCom URL verification success!');
    console.log('===============================');

    // 返回纯文本，不带引号、不带换行、不带 BOM
    return new NextResponse(decryptedMsg, {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });

  } catch (error) {
    console.error('Error during URL verification:', error);
    return new NextResponse('Decryption failed', { status: 500 });
  }
}

// =====================================================
// POST: 接收企业微信消息
// =====================================================
export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const msg_signature = searchParams.get('msg_signature');
  const timestamp = searchParams.get('timestamp');
  const nonce = searchParams.get('nonce');

  // 检查环境变量
  if (!WECOM_TOKEN || !WECOM_ENCODING_AES_KEY || !WECOM_CORP_ID) {
    console.error('Missing WeCom environment variables');
    return new NextResponse('Server configuration error', { status: 500 });
  }

  // 检查必需参数
  if (!msg_signature || !timestamp || !nonce) {
    return new NextResponse('Missing signature parameters', { status: 400 });
  }

  try {
    // 读取请求体 (XML)
    const rawBody = await request.text();

    console.log('=== WeCom Webhook POST Request ===');
    console.log('Raw body:', rawBody.substring(0, 200));

    // 提取 Encrypt 字段
    const encrypt = extractEncryptFromXml(rawBody);

    if (!encrypt) {
      console.error('No Encrypt field found in XML');
      return new NextResponse('Invalid XML format', { status: 400 });
    }

    // 验证签名
    const signatureValid = verifySignature(
      WECOM_TOKEN,
      timestamp,
      nonce,
      encrypt,
      msg_signature
    );

    if (!signatureValid) {
      console.error('Signature verification failed');
      return new NextResponse('Signature verification failed', { status: 401 });
    }

    // 解密消息
    const { msg: decryptedXml, corpId } = decryptWeComMessage(encrypt, WECOM_ENCODING_AES_KEY);

    console.log('Decrypted XML:', decryptedXml);
    console.log('CorpID:', corpId);

    // TODO: 根据业务需求处理消息
    // 可以解析 decryptedXml 中的 ToUserName, FromUserName, CreateTime, MsgType, Content 等字段

    // 返回成功响应（企业微信要求的格式）
    return new NextResponse('success', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' }
    });

  } catch (error) {
    console.error('Error processing webhook:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
