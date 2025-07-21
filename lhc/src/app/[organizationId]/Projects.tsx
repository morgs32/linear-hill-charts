import { ProjectsAndOrganizationQuery } from 'lhc/src/utils/linear'
import Link from 'next/link'

interface IProps {
  organizationId: string
  projects: ProjectsAndOrganizationQuery['projects']['nodes']
}

export function Projects({ projects, organizationId }: IProps) {

  return (
    <div>
      {/* <h2 className="text-sm font-medium text-gray-500">Pinned Projects</h2> */}
      <ul className="my-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {projects.map((project) => (
          <li key={project.id} className="col-span-1 flex rounded-md shadow-sm relative">
            <div className="flex-1 flex flex-col space-y-2 px-4 py-2 text-sm rounded-md border border-gray-200 bg-white">
              <Link href={`/${organizationId}/${project.id}`} className="font-medium text-gray-900 hover:text-gray-600 after:absolute after:inset-0">
                {project.name}
              </Link>
              <p className="text-gray-400 w-10/12">
                {project.description 
                  ? project.description
                  : 'No description'}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
