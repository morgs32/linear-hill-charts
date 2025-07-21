import { NextResponse } from 'next/server';
import CryptoJS from 'crypto-js';
import { okrs } from 'okrs';
import { inngest } from '../../inngest/inngest';

export const runtime = 'edge'

export async function POST(req: Request) {

  const kr = await okrs.coerce(async () => {
    const body = await req.text()
    const signature = CryptoJS.HmacSHA256(body, process.env.LINEAR_WEBHOOK_SECRET!).toString(CryptoJS.enc.Hex)
    if (signature !== req.headers.get('linear-signature')) {
      return NextResponse.json({
        message: 'Invalid signature'
      }, {
        status: 401,
      })
    }
    const payload = JSON.parse(body)
  
    await inngest.send({
      name: 'processLinearEvent',
      data: payload
    })

  })

  if (!kr.success) {
    console.error(kr)
  }
  return okrs.res(kr)
  
}