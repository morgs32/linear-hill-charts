import {
  IHillchartIssue 
} from 'lhc/index';
import { ProgressBadge } from './ProgressBadge';

const { widget } = figma

const { 
  AutoLayout,
  Text
} = widget

interface IProps {
  issue: IHillchartIssue
}

export function IssueLegendItem(props: IProps) {

  const { issue } = props
  const [activeIssueId, setActiveIssueId] = widget.useSyncedState('activeIssueId', '')
  const isActive = activeIssueId === issue.id

  return (
    <AutoLayout
      name="IssueInLegend"
      onClick={() => {
        setActiveIssueId(issue.id)
      }}
      effect={isActive ? undefined : {
        type: 'drop-shadow',
        color: '#00000014',
        offset: {
          x: 0,
          y: 2,
        },
        blur: 4,
      }}
      hoverStyle={isActive ? {} : {
        fill: '#F3F3F3'
      }}
      fill={isActive ? '#D3D3D3' : '#FFF'}
      stroke="#DDD"
      cornerRadius={8}
      overflow="visible"
      spacing={10}
      padding={16}
      width="fill-parent"
      {...props}
    >
      <Text
        name="Issue title"
        fill="#010101"
        width="fill-parent"
        fontFamily="Noto Sans"
        letterSpacing={-0.2}
      >
        {issue.title}
      </Text>
      <ProgressBadge progress={issue.progress} />
    </AutoLayout>
  );
}