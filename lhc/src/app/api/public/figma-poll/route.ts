import { myPrisma } from 'lhc/src/utils/myPrisma';
import { unsealData } from 'iron-session/edge';
import { NextRequest, NextResponse } from 'next/server';
import { okrs } from 'okrs';
import { z } from 'zod';
import { IFigmaPollPayload } from './types';

export const runtime = 'edge'

export async function GET(req: NextRequest): Promise<NextResponse<IFigmaPollPayload>> {

  const readKey = req.nextUrl.searchParams.get('readKey');
  if (!readKey) {
    return NextResponse.json(okrs.fail('readKey is required'), {
      status: 400
    })
  }

  const writeKey: string = await unsealData(readKey, {
    password: z.string().parse(process.env.SESSION_SECRET),
  })
  const linearAuth = await myPrisma.figmaAuth.findFirst({
    where: {
      workspaceKey: writeKey
    }
  })
  if (!linearAuth) {
    return NextResponse.json(okrs.fail('No linearAuth yet'), {
      status: 200
    })
  }
  return NextResponse.json(okrs.ok(writeKey))

}