import type { Prisma, PrismaClient as IPrismaClient } from '@prisma/client/index.d.ts'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices



const { PrismaClient } = !global.fetch
  ? require('@prisma/client')
  : require('@prisma/client/edge')

// @ts-ignore
export const myPrisma = global._prisma as IPrismaClient || new PrismaClient() as IPrismaClient

// @ts-ignore
if (process.env.NODE_ENV !== 'production') global._prisma = myPrisma


export {
  Prisma as IPrisma,
}