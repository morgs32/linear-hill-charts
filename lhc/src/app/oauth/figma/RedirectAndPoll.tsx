'use client'
import { IFigmaPollPayload } from 'lhc/src/app/api/public/figma-poll/types'
import React from 'react'
import { useEffect } from 'react'
import { z } from 'zod'

interface IProps {
  readKey: string
  writeKey: string
}

export function RedirectAndPoll(props: IProps) {

  const { 
    readKey, 
    writeKey 
  } = props

  const windowOpened = React.useRef(false)

  useEffect(() => {

    if (!windowOpened.current) {
      const authUrl = new URL('https://linear.app/oauth/authorize')
      authUrl.searchParams.append('client_id', z.string().parse(process.env.NEXT_PUBLIC_LINEAR_CLIENT_ID))
      authUrl.searchParams.append('redirect_uri', z.string().parse(process.env.NEXT_PUBLIC_LINEAR_FIGMA_REDIRECT_URL))
      authUrl.searchParams.append('response_type', 'code')
      authUrl.searchParams.append('prompt', 'consent')
      authUrl.searchParams.append('actor', 'application')
      authUrl.searchParams.append('state', writeKey)
      window.open(authUrl.href, '_blank')
      windowOpened.current = true
    }

    const interval = setInterval(async () => {
      const res = await fetch(`/api/public/figma-poll?readKey=${readKey}`, {
        method: 'GET',
      })
      const kr = await res.json() as IFigmaPollPayload
      if (kr.success) {
        window.parent.postMessage({
          pluginMessage: ['setWorkspaceKey', kr.value],
          pluginId: '1263572513522815442'
        }, '*')
        clearInterval(interval)
        window.close()
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [readKey, writeKey])

  return null

}