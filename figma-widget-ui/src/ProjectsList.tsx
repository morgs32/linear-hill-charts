import clsx from 'clsx'
import { dates } from 'lhc/index'

interface IProps {
  projects: {
    id: string
    name: string
    state: string
    targetDate?: string
    lead?: {
      name: string
    } | null
  }[]
  onChange: (projectId: string) => void
}

const states: Record<string, string> = {
  completed: 'text-green-700 bg-green-50 ring-green-600/20',
  active: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  planned: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
}

export default function ProjectsList(props: IProps) {
  
  const {
    projects,
    onChange,
  } = props

  return (
    <ul className="divide-y divide-gray-300 bg-gray-50">
      {projects.map((project) => (
        <li key={project.id} className="flex px-4 items-center justify-between gap-x-6 py-2">
          <div className="min-w-0">
            <div className="flex items-start gap-x-3">
              <p className="text-sm font-semibold leading-6 text-gray-900">{project.name}</p>
              <p
                className={clsx(
                  states[project.state],
                  'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                )}
              >
                {project.state}
              </p>
            </div>
            <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
              <p className="whitespace-nowrap">
                {project.targetDate 
                  ? (
                    <>
                      Due on <time dateTime={dates(project.targetDate).toISOString()}>{dates(project.targetDate).format('MMM D')}</time>
                    </>
                  )
                  : 'No target date'
                }
              </p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle cx={1} cy={1} r={1} />
              </svg>
              {project.lead 
                ? (
                  <p className="truncate">Lead by {project.lead.name}</p>
                )
                : 'No project lead'
              }
            </div>
          </div>
          <div className="flex flex-none items-center gap-x-4">
            <button
              onClick={() => {
                onChange(project.id)
              }}
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
            >
              Select<span className="sr-only">, {project.name}</span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
