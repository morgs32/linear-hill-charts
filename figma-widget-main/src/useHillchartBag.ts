import { IHillchartIssue, getHillchartIssues } from 'lhc/index';
import { client } from 'zod-sdk'
import { sdk } from './sdk';

const { widget } = figma

interface IHillchartBag {
  hillchartIssues: Array<IHillchartIssue>
  organization: {
    name: string
  }
  project: {
    name: string
  }
}

export function useHillchartBag() {
  const [hillchartBag, setHillchartBag] = widget.useSyncedState<IHillchartBag | null>('hillchartBag', null)
  const [_projectId] = widget.useSyncedState('projectId', '')
  const [_workspaceKey] = widget.useSyncedState('workspaceKey', '')
  return [hillchartBag, async function fetchBag(projectId = _projectId, workspaceKey = _workspaceKey) {
    const hillchartBag = await client.query(sdk.hillchartBag, query => query(projectId), {
      headers: {
        'x-lhc-workspace-key': workspaceKey,
      }
    })
    const hillchartIssues = getHillchartIssues({ hillchartBag })
    const bag = {
      hillchartIssues,
      project: hillchartBag.project,
      organization: hillchartBag.organization,
    }
    setHillchartBag(bag)
  }] as const
}
