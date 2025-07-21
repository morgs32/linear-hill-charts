import { qi } from 'lhc/src/styles/qi';
import clsx from 'clsx';
import Link from 'next/link';
import { getColorForPercentage, makeRgb } from './getColorForPercentage';
import { IHillchartIssue } from './IHillchartIssue';

interface IProps {
  hillchartIssues?: Array<IHillchartIssue>
  activeIssueId?: string;
  organizationId: string
  projectId: string
}

export function IssuesLegend(props: IProps) {

  const { 
    hillchartIssues,
    activeIssueId,
    organizationId,
    projectId,
  } = props;

  const figuringThingsOuts = hillchartIssues?.filter(issue => issue.progress < 5)
  const gettingThingsDone = hillchartIssues?.filter(issue => issue.progress >= 5)

  return (
    <div className="grid grid-cols-2 space-x-4">
      <ul>
        {figuringThingsOuts?.map((issue, issueIdx) => {
          const isActive = activeIssueId === issue.id
          return (
            <li 
              key={issue.id}
              className="py-1 relative space-x-2 flex items-start"
            >
              <span 
                style={{
                  background: makeRgb(getColorForPercentage(issue.progress / 10))
                }}  
                className="inline-flex border items-center rounded-md bg-white p-1 text-xs font-medium text-white">
                {issue.progress}
              </span>
              <Link
                href={`/${organizationId}/${projectId}?issueId=${issue.id}`}
                replace
                prefetch
                scroll={false}
                className={clsx(
                  'after:absolute after:inset-0',
                  isActive ? 'text-black cursor-default font-semibold pointer-events-none' : 'text-indigo-800 ',
                )}
              >
                {issue.title}
              </Link>
           
            </li>
          )
        })}
      </ul>
      <ul>
        {gettingThingsDone?.map((issue, issueIdx) => {
          const isActive = activeIssueId === issue.id
          return (
            <li 
              key={issue.id}
              className="my-1 relative space-x-2 flex items-start"
            >
              <span 
                style={{
                  background: makeRgb(getColorForPercentage(issue.progress / 10))
                }}  
                className="inline-flex border items-center rounded-md bg-white p-1 text-xs font-medium text-white">
                {issue.progress.toFixed(2)}
              </span>
              <Link
                href={`/${organizationId}/${projectId}?issueId=${issue.id}`}
                replace
                prefetch
                className={clsx(
                  qi['stretched-link'],
                  isActive ? 'text-black cursor-default font-semibold pointer-events-none' : 'text-indigo-800 ',
                )}
              >
                {issue.title}
              </Link>
           
            </li>
          )
        })}
      </ul>
    </div>
  );
}
