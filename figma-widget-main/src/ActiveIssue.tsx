import { IHillchartIssue } from 'lhc/index'
import { useHillchartBag } from './useHillchartBag'
import { ProgressBadge } from './ProgressBadge'
import { CommentThread } from './CommentThread'

const { widget } = figma
const { 
  AutoLayout,
  Text,
  Line
} = widget

export function ActiveIssue() {

  const [hillchartBag] = useHillchartBag()
  if (!hillchartBag) throw new Error('No hillchart bag')
  
  const [activeIssueId] = widget.useSyncedState('activeIssueId', '')
  const activeIssue = hillchartBag.hillchartIssues.find((issue: IHillchartIssue) => issue.id === activeIssueId)
  if (!activeIssue) return null

  return (
    <>
      <Line
        name="Line"
        effect={{
          type: 'drop-shadow',
          color: '#00000040',
          offset: {
            x: 0,
            y: 1,
          },
          blur: 1,
          showShadowBehindNode: false,
        }}
        stroke="#878787"
        length="fill-parent"
      />
      <AutoLayout
        cornerRadius={8}
        overflow="visible"
        spacing={10}
        width="fill-parent"
      >
        <Text
          name="Active issue title"
          width="fill-parent"
          fontWeight={700}
        >
          {activeIssue.title}
        </Text>
        <AutoLayout
          verticalAlignItems="center"
          spacing={20}
        >
          <Text
            fill="#5848BC"
            width={154}
            horizontalAlignText="right"
          >
            {activeIssue.identifier}
          </Text>
          <ProgressBadge progress={activeIssue.progress} />
        </AutoLayout>
      </AutoLayout>
      <>
        {activeIssue?.description ? (
          <Text>
            {activeIssue.description}
          </Text>
        ) : (
          <Text>
            No issue description {!activeIssue.comments.length ? 'or comments' : ''}
          </Text>
        )}
      </>      
      <CommentThread comments={activeIssue.comments} />
    </>
  )
}