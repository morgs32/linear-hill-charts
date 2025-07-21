import { render } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import './styles.css'
import { emit } from './events'
import manifest from '@/manifest.json'
import ProjectsList from './ProjectsList';
import { sdk } from './sdk';
import { client } from 'zod-sdk'

declare global {
  var __SHOW_UI_DATA__: {
    workspaceKey: string | null
  };
}

// const projects = 

interface IProps {
  workspaceKey: string | null
}

const authUrl = `${manifest.networkAccess.allowedDomains[0]}/oauth/figma`

function App(props: IProps) {

  const { workspaceKey } = props
  const [data, setData] = useState<client.infer<typeof sdk.projectsAndOrganization> | null>(null)

  useEffect(() => {
    if (!workspaceKey) {
      document.location.href = authUrl;
      return
    }
    client.query(sdk.projectsAndOrganization, query => query(), {
      headers: {
        'x-lhc-workspace-key': workspaceKey
      }
    })
      .then(data => setData(data))
    
  }, [workspaceKey])


  if (!data) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        Loading...
      </div>
    )
  }

  return (
    <div className="divide-y-2 divide-gray-300">
      <div className="space-y-2 p-4">
        <p className="text-xs font-medium text-gray-500 uppercase">
          Workspace
        </p>
        <h1 className="text-sm">
          {data.organization.name}
        </h1>
      </div>
      <ProjectsList
        projects={data.projects.nodes}
        onChange={((projectId) => {
          emit('setProjectId', projectId)
        })}
      />
    </div>
  )

}

render(
  <App {...__SHOW_UI_DATA__} />,
  document.getElementById('lhc-plugin')!
);
