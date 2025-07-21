import { authMiddleware } from '@clerk/nextjs'
import {
  NextFetchEvent,
  NextRequest,
  NextResponse 
} from 'next/server';

const regex = /\/(.*\..*|_next|api|oauth|monitoring)/

export default function middleware(req: NextRequest, event: NextFetchEvent) {
  if (req.nextUrl.pathname.match(regex)) {
    return NextResponse.next()
  }
  const auth = authMiddleware({
    // debug: true,
    publicRoutes: [
      '/'
    ],
  })
  return auth(req, event)
}
