import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const userAgent = req.headers.get('user-agent') || '';

  if (userAgent.toLowerCase().includes('googlebot')) {
    // Example: Serve a simplified page for bots
    return NextResponse.rewrite(new URL('/bot-version', req.url));
  }

  // Proceed with regular content
  return NextResponse.next();
}