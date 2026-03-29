import { NextResponse } from 'next/server';

export async function GET() {
  const rawKey    = process.env.WECOM_ENCODING_AES_KEY || '';
  const cleanedKey = rawKey.trim().replace(/=+$/, '');

  const rawCorpId    = process.env.WECOM_CORP_ID || '';
  const cleanedCorpId = rawCorpId.trim();

  const rawToken    = process.env.WECOM_TOKEN || '';
  const cleanedToken = rawToken.trim();

  const config = {
    WECOM_TOKEN_length:              rawToken.length,
    WECOM_TOKEN_cleaned:             cleanedToken,
    WECOM_ENCODING_AES_KEY_raw_len:  rawKey.length,
    WECOM_ENCODING_AES_KEY_clean_len: cleanedKey.length,
    WECOM_ENCODING_AES_KEY_status:   cleanedKey.length === 43 ? '✅ CORRECT' : `❌ WRONG (${cleanedKey.length} chars, need 43)`,
    WECOM_CORP_ID_raw_length:        rawCorpId.length,
    WECOM_CORP_ID_cleaned:           cleanedCorpId,
    WECOM_CORP_ID_clean_length:      cleanedCorpId.length,
  };

  return NextResponse.json(config, {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
