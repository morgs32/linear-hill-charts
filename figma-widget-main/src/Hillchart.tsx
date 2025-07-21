import { IHillchartIssue, drawHillchart } from 'lhc/index'
import { useHillchartBag } from './useHillchartBag'
import { IssueLegend } from './IssueLegend'
import { ActiveIssue } from './ActiveIssue'

const { widget } = figma
const { 
  AutoLayout,
  SVG,
  Text,
} = widget

export function Hillchart() {

  const [hillchartBag] = useHillchartBag()
  const [activeIssueId] = widget.useSyncedState('activeIssueId', '')
  const [stateType, setStateType] = widget.useSyncedState('stateType', 'active')

  if (!hillchartBag) throw new Error('No hillchart bag')

  const activeIssues: IHillchartIssue[] = []
  const completedIssues: IHillchartIssue[] = []
  for (const issue of hillchartBag.hillchartIssues) {
    if (issue.state.type === 'completed') {
      completedIssues.push(issue)
      continue
    }
    activeIssues.push(issue)
  }
  const filteredIssues = stateType === 'active' ? activeIssues : completedIssues
  return (
    <>
      <AutoLayout
        direction="horizontal"
        spacing="auto"
        width="fill-parent"
      >
        <AutoLayout
          direction="vertical"
          spacing={8}
        >
          <Text
            fill="#8D8D8D"
            verticalAlignText="center"
            fontSize={10}
            fontWeight={700}
            textCase="upper"
            horizontalAlignText="left"
          >
            Project
          </Text>
          <Text>
            {hillchartBag.project.name}
          </Text>
        </AutoLayout>
        <AutoLayout
          direction="vertical"
          spacing={8}
        >
          <Text
            fill="#8D8D8D"
            verticalAlignText="center"
            fontSize={10}
            fontWeight={700}
            textCase="upper"
            width="fill-parent"
            horizontalAlignText="right"
          >
            Organization
          </Text>
          <Text>
            {hillchartBag.organization.name}
          </Text>
        </AutoLayout>
      </AutoLayout>
      <SVG
        width="fill-parent"
        src={drawHillchart({
          activeIssueId,
          hillchartIssues: filteredIssues,
        })}
      />
      {completedIssues.length > 0 && (
        <Text
          width="fill-parent"
          onClick={() => {
            stateType === 'active' ? setStateType('completed') : setStateType('active')
          }}
          fill="#0300A9"
          textDecoration="underline"
          horizontalAlignText="right"
        >
          {stateType === 'active' ? 'Show completed issues' : 'Show active issues'}
        </Text>
      )}
      {hillchartBag.hillchartIssues.length ? (
        <>
          <IssueLegend
            hillchartIssues={filteredIssues}
          />
          <ActiveIssue />
        </>
      ) : (
        <Text
          width="fill-parent"
          horizontalAlignText='center'
        >
          No issues
        </Text>
      )}
    </>
  )
}