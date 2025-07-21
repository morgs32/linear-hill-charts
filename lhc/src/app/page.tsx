import Link from 'next/link';
import { AddOrganization } from './AddOrganization.client';
import { requireAuth } from './requireAuth';
import { getUser } from './getUser';
import { sealData } from 'iron-session/edge';
import { z } from 'zod';

export default async function Page() {

  const { userId } = requireAuth()
  const user = await getUser(userId)
    .catch((err) => {
      console.error(err)
    })
  const state = await sealData({
    userId,
  }, {
    password: z.string().parse(process.env.SESSION_SECRET),
  });

  const organizations = user?.linearAuths.map((linearAuth) => linearAuth.organization)

  if (!organizations?.length) {
    return (
      <div className="flex-1 flex flex-col justify-center text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-semibold text-gray-900">No Linear workspaces</h3>
        <p className="mt-1 text-sm text-gray-500">Add an integration to your Linear workspace</p>
        <div className="mt-6">
          <AddOrganization state={state} />
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col space-y-6 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 my-3 md:my-10">
      <div className="space-y-6 mx-auto max-w-3xl">
        <div className="flex justify-between">
          <div className="px-4 sm:px-0">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Your workspaces
            </h1>
            <p className="mt-2 text-sm text-gray-500">These are the workspaces you have authenticated with</p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <AddOrganization state={state} />
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Assigned Workspaces
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">
                        Select
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {organizations.map((organization) => (
                    <tr key={organization.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {organization.name}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <Link
                          href={`/${organization.id}`}
                          className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                        >
                          Select
                          <span className="sr-only">, {organization.name}</span>
                        </Link>                  
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


}