import { NextResponse } from 'next/server';
import { noCorsHeaders } from '../figma/[sdk]/no-cors-headers';

export const runtime = 'edge'
 
export async function GET() {
  return NextResponse.json({
    hello: 'world'
  }, {
    headers: noCorsHeaders
  })
}