import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { handleLinearAuthInApp } from './handleLinearAuthInApp';

export const runtime = 'edge'

interface ISearchParams {
  code?: string
  state?: string
}

export default async function Page({ searchParams }: { searchParams: ISearchParams }) {

  const code = z.string().parse(searchParams.code)
  const state = z.string().parse(searchParams.state)

  const kr = await handleLinearAuthInApp({
    code,
    state,
  })

  if (kr.success) {
    redirect('/')
  }

  return NextResponse.json(kr)

}



