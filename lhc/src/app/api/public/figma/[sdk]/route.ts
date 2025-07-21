import { NextResponse } from 'next/server'
import { noCorsHeaders } from './no-cors-headers'
import { zsdkserver } from 'zod-sdk/server'
import { routes } from './routes'

export function OPTIONS() {
  return new NextResponse('ok', {
    headers: noCorsHeaders
  })
}


export const {
  GET,
  POST
} = zsdkserver.makeRouter(routes)