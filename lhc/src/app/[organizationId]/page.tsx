import { qi } from 'lhc/src/styles/qi';
import { Projects } from './Projects';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { getLinearGraphqlSdk } from './getLinearGraphqlSdk';

interface IProps { 
  searchParams: { 
    organizationId: string
    projectId: string 
    activeIssueId?: string 
  }
}

export default async function Page(props: IProps) {

  const { searchParams } = props
  const sdk = await getLinearGraphqlSdk(searchParams.organizationId)
  const res = await sdk.projectsAndOrganization()
  const projects = res.data.projects.nodes
  
  return (
    <div className="max-w-5xl m-auto">
      <div className="flex justify-between">
        <Link
          className="flex items-center text-indigo-600"
          href={`/${searchParams.organizationId}`}
        >
          <ChevronLeftIcon className="w-5 h-5" />
          Switch workspace
        </Link>
      </div>

      <div className="flex-1 flex flex-col space-y-6 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 my-3 md:my-10">
        <div className="px-4 sm:px-0">
          <h1 className={qi.h1.str()}>
            Your projects
          </h1>
          <p className="mt-2 text-sm text-gray-500">These are your linear projects</p>
        </div>
        <Projects projects={projects} organizationId={searchParams.organizationId} />
      </div>
    </div>
  )



}