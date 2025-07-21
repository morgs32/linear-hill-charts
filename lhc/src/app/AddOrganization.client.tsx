'use client'
import { z } from 'zod';

export function AddOrganization({ state }: { state: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        const authUrl = new URL('https://linear.app/oauth/authorize')
        authUrl.searchParams.append('client_id', z.string().parse(process.env.NEXT_PUBLIC_LINEAR_CLIENT_ID))
        authUrl.searchParams.append('redirect_uri', z.string().parse(process.env.NEXT_PUBLIC_LINEAR_LHC_REDIRECT_URL))
        authUrl.searchParams.append('response_type', 'code')
        authUrl.searchParams.append('prompt', 'consent')
        authUrl.searchParams.append('actor', 'application')
        authUrl.searchParams.append('state', state)
        window.location.href = authUrl.href

      }}
      className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
    >
      Add organization
    </button>                  
  )
}