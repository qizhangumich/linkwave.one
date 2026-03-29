import { NextResponse } from 'next/server';

export async function GET() {
  const config = {
    WECOM_TOKEN: process.env.WECOM_TOKEN || 'MISSING',
    WECOM_ENCODING_AES_KEY: process.env.WECOM_ENCODING_AES_KEY ? `SET (${process.env.WECOM_ENCODING_AES_KEY.length} chars)` : 'MISSING',
    WECOM_CORP_ID: process.env.WECOM_CORP_ID || 'MISSING',
  };

  return NextResponse.json(config, {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
