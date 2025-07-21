import { getSdk } from 'lhc/src/utils/linear'
import { myPrisma } from 'lhc/src/utils/myPrisma'
import { GraphQLClient } from 'graphql-request'
import { okrs } from 'okrs'
import { z } from 'zod'
import { zsdkserver } from 'zod-sdk/server'
import { noCorsHeaders } from './no-cors-headers'

const service = zsdkserver.makeService({
  middleware: async (req, next) => {
    const payload = await next()
    return new Response(JSON.stringify(payload), {
      headers: noCorsHeaders
    })
  },
  makeContext: async (req: Request) => {
    const workspaceKey = okrs.strict(() => z.string({
      invalid_type_error: 'x-lhc-workspace-key header is required',
    }).parse(req.headers.get('x-lhc-workspace-key')))
    const linearAuth = await myPrisma.figmaAuth.findFirst({
      where: {
        workspaceKey,
      },
    })
    if (!linearAuth) throw okrs.fail('Linear Auth not found')
    const accessToken = linearAuth.accessToken
    if (!accessToken) throw okrs.fail('Linear access token not found')
    // TODO: Fallback to another token if the first one is expired and remove expired token...
    const client = new GraphQLClient('https://api.linear.app/graphql', {
      fetch,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    })
    const sdk = getSdk(client);
    return {
      sdk
    }
  }
})

const projectsAndOrganization = service.makeQuery(async () => {
  const { sdk } = service.useCtx()
  const res = await sdk.projectsAndOrganization()
  return res.data
})

const hillchartBag = service.makeQuery(async (projectId: string) => {
  const { sdk } = service.useCtx()
  const res = await sdk.hillchartBag({ projectId })
  return res.data
})

export const routes = {
  projectsAndOrganization,
  hillchartBag,
}

export type IFigmaRoutes = typeof routes