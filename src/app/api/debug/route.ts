import { NextResponse } from 'next/server';

export async function GET() {
  const rawKey = process.env.WECOM_ENCODING_AES_KEY || '';
  const cleanedKey = rawKey.trim().replace(/=+$/, '');

  const config = {
    WECOM_TOKEN: process.env.WECOM_TOKEN || 'MISSING',
    WECOM_ENCODING_AES_KEY_raw_length: rawKey ? rawKey.length : 'MISSING',
    WECOM_ENCODING_AES_KEY_cleaned_length: cleanedKey ? cleanedKey.length : 'MISSING',
    WECOM_ENCODING_AES_KEY_status: cleanedKey.length === 43 ? '✅ CORRECT (43 chars)' : `❌ WRONG (${cleanedKey.length} chars, expected 43)`,
    WECOM_CORP_ID: process.env.WECOM_CORP_ID || 'MISSING',
  };

  return NextResponse.json(config, {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
