import { createId } from '@paralleldrive/cuid2'
import { sealData } from 'iron-session/edge'
import { RedirectAndPoll } from './RedirectAndPoll'
import { z } from 'zod'
import { handleLinearAuthInFigma } from './handleLinearAuthInFigma'
import { qi } from 'lhc/src/styles/qi'

interface ISearchParams {
  code?: string
  state?: string
}

export default async function Page({ searchParams }: { searchParams: ISearchParams }) {

  if (searchParams.state) {
    const code = z.string().parse(searchParams.code)
    const writeKey = z.string().parse(searchParams.state)
    const kr = await handleLinearAuthInFigma({
      writeKey,
      code,
    })        
    if (kr.success) {
      return (
        <div className={qi.center.str()}>
          Done! You can close this window now and return to Figma.
        </div>
      )
    }
    console.error(kr)
    return (
      <div className={qi.center.str()}>
        Issue saving your Linear workspace key. Please try again.
      </div>
    )
  }


  /**
   * If we have state,
   * It's the writeKey. Save to db. Use prisma.create. It will obviously fail if attempted twice.
   * As for the readKey... once the read key is used... you can't really decommission it...
   * Unless you blow it up in the db..., ok...
   */

  const writeKey = createId()
  const readKey = await sealData(writeKey, {
    password: z.string().parse(process.env.SESSION_SECRET),
  })
  
  return (
    <>
      <RedirectAndPoll 
        readKey={readKey} 
        writeKey={writeKey}
      />

      <div className={qi.center.str()}>
        Opening a window to authenticate with Linear...
      </div>
    </>
  )

}


