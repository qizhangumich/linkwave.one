import { NextRequest, NextResponse } from 'next/server';

// WeChat Work webhook handler
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const msg_signature = searchParams.get('msg_signature');
  const timestamp = searchParams.get('timestamp');
  const nonce = searchParams.get('nonce');
  const echostr = searchParams.get('echostr');

  if (!msg_signature || !timestamp || !nonce || !echostr) {
    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
  }

  // TODO: Verify signature using your WeChat Work token and encoding_aes_key
  // For now, return the echostr for basic verification
  return new NextResponse(echostr, {
    status: 200,
    headers: { 'Content-Type': 'text/plain' }
  });
}

export async function POST(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const msg_signature = searchParams.get('msg_signature');
    const timestamp = searchParams.get('timestamp');
    const nonce = searchParams.get('nonce');

    if (!msg_signature || !timestamp || !nonce) {
      return NextResponse.json({ error: 'Missing signature parameters' }, { status: 400 });
    }

    // Parse the request body
    const body = await request.json();

    // TODO: Verify and decrypt the message using your WeChat Work credentials
    // TODO: Process the message based on its type (text, image, event, etc.)

    console.log('Received WeChat Work webhook:', {
      timestamp,
      body
    });

    // Return success response
    return NextResponse.json({ code: 0, message: 'success' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
