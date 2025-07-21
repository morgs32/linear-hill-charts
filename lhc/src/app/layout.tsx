import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider, auth } from '@clerk/nextjs'
import {
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { SelectOrganization } from './SelectOrganization';
import { okrs } from 'okrs'
import { myPrisma } from 'lhc/src/utils/myPrisma';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Linear Hill Charts',
  description: 'Shape up you Linear projects with hill charts!',
}

export const runtime = 'edge'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  const kr = await okrs.coerce(async () => {
    const { userId } = auth()
    if (!userId) throw okrs.fail('not-logged-in')
    const user = await myPrisma.user.findUnique({
      where: {
        id: userId
      },
      include: {
        linearAuths: {
          include: {
            organization: true
          }
        }
      }
    })
    return user?.linearAuths.map(({ organization }) => organization)
  })

  return (
    <html lang="en">
      <body className={inter.className}>
        {kr.success ? (
          <ClerkProvider>
            <header className="px-4 h-[64px] flex flex-col justify-center">
              <div className="flex justify-between">
                <div className="space-x-4 flex align-center relative">
                  <Link href="/" className="flex justify-between relative">
                    <Image src="/LHC.svg" width={32} height={32} alt="Logo" style={{ width: '32px', height: '32px' }} />
                  </Link>
                  {kr.value && <SelectOrganization organizations={kr.value} />}
                </div>
                <div className="space-x-4">
                  <SignedOut>
                    <Link href="/sign-in">Sign in</Link>
                  </SignedOut>
                  <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                  </SignedIn>
                </div>
              </div>
            </header>         
            <main className="min-h-[calc(100vh-64px)] flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 md:py-10">
              {children}
            </main>
          </ClerkProvider>
        ) : children}
      </body>
    </html>
  )
}
