import { qi } from 'lhc/src/styles/qi'
import { IssuesLegend } from './IssuesLegend'
import { CommentTimeline } from './CommentTimeline'
import ReactMarkdown from 'react-markdown';
import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { redirect } from 'next/navigation'
import { drawHillchart } from './drawHillchart';
import { getHillchartIssues } from './getHillchartIssues';
import { getLinearGraphqlSdk } from '../getLinearGraphqlSdk';

interface IProps { 
  searchParams: { 
    organizationId: string, 
    projectId: string 
    issueId?: string 
  },
}

export const runtime = 'edge'

export default async function Page(props: IProps) {

  const { searchParams } = props

  const sdk = await getLinearGraphqlSdk(searchParams.organizationId)
  const { data: hillchartBag } = await sdk.hillchartBag({ projectId: searchParams.projectId })
  if (!hillchartBag) {
    // TODO: Show an empty state
    redirect(`/${searchParams.organizationId}`)
  }
  const hillchartIssues = await getHillchartIssues({
    hillchartBag
  })
  const { project } = hillchartBag

  const activeIssue = hillchartIssues.find(i => i.id === searchParams.issueId)

  return (
    <div className="max-w-5xl m-auto">
      <Link
        className="flex items-center text-indigo-600"
        href={`/${searchParams.organizationId}`}
      >
        <ChevronLeftIcon className="w-5 h-5" />
        Back to workspace
      </Link>
      <div className="flex-1 flex flex-col space-y-6 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 my-3 md:my-10">
        <div>
          <h1 className={qi.h1.str()}>
            {project.name}
          </h1>
          <p className="text-sm text-gray-500">
            {project.description || 'No description'}
          </p>
        </div>

        <div 
          dangerouslySetInnerHTML={{
            __html: drawHillchart({
              hillchartIssues,
              activeIssueId: searchParams.issueId,
            }) 
          }} 
        />

        <IssuesLegend 
          organizationId={searchParams.organizationId}
          projectId={searchParams.projectId}
          activeIssueId={searchParams.issueId}
          hillchartIssues={hillchartIssues}
        />

        {activeIssue && (
          <>
            <hr />
            <div>
              <p className="text-2xl mb-4 text-gray-600">{activeIssue.title}</p>
              {activeIssue.description ? (
                <ReactMarkdown
                  children={activeIssue.description}
                />
              ) : (
                <p className="text-gray-500">No description</p>
              )}
            </div>
            <hr />
      
            <CommentTimeline 
              comments={activeIssue.comments}
            />
          </>
        )}

      </div>
    </div>
  )

}