import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const hash = req.nextUrl.searchParams.get('hash');
  const redirect = req.nextUrl.searchParams.get('redirect') || '/';
  
  if (hash) {
    return NextResponse.redirect(new URL(`${redirect}?hash=${hash}`, req.url));
  }
  
  return NextResponse.redirect(new URL(redirect, req.url));
}
