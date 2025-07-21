import { Hillchart } from './Hillchart'
import { on } from './events'
import { showUI, uiDimensions } from './showUI'
import { useHillchartBag } from './useHillchartBag'
import { useMenu } from './useMenu'

const { widget } = figma
const { 
  useEffect,
  AutoLayout,
  Text,
} = widget

widget.register(LinearHillcharts)

let ref: {
  workspaceKey?: string
} = {}

function LinearHillcharts() {
  const [workspaceKey, setWorkspaceKey] = widget.useSyncedState('workspaceKey', '')
  const [projectId, setProjectId] = widget.useSyncedState('projectId', '')
  const [hillchartBag, fetchBag] = useHillchartBag()

  useEffect(() => {
    const deregisterFns = [
      on('setWorkspaceKey', async (newKey) => {
        setWorkspaceKey(newKey)
        ref.workspaceKey = newKey
        figma.ui.close()
        showUI(uiDimensions, {
          workspaceKey: newKey,
        })
      }),
      on('setProjectId', async (newProjectId) => {
        await fetchBag(newProjectId) // Because projectId is not on state yet!
        setProjectId(newProjectId)
        figma.closePlugin()
      })
    ]
    return () => {
      deregisterFns.forEach(fn => fn())
    }
  })

  useMenu()

  function renderBody() {
    if (!workspaceKey) {
      return (
        <Text
          name="Login to Linear"
          horizontalAlignText="center"
          width="fill-parent"
          fontSize={14}
          fontWeight={700}
        >
          Login to Linear
        </Text>
      )
    }
    if (!projectId) {
      return (
        <Text
          horizontalAlignText="center"
          width="fill-parent"
          fontSize={14}
          fontWeight={700}
        >
          Choose a Linear project
        </Text>
      )
    }
    if (!hillchartBag) {
      return (
        <Text
          horizontalAlignText="center"
          width="fill-parent"
          fontSize={14}
          fontWeight={700}
        >
          Loading...
        </Text>
      )
    }
    return (
      <Hillchart />
    )
  }

  return (
    <AutoLayout
      fill="#FFF"
      stroke="#000"
      overflow="visible"
      direction="vertical"
      height="hug-contents"
      width={840}
      spacing={40}
      padding={40}
      strokeWidth={2}
      cornerRadius={4}
      effect={{
        type: 'drop-shadow',
        color: '#000',
        offset: {
          x: 4,
          y: 4,
        },
        blur: 0,
        showShadowBehindNode:
          false,
      }}
    >
      {renderBody()}
    </AutoLayout>
  )

 
}
