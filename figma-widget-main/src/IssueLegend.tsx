import { IHillchartIssue } from 'lhc/index';
import { IssueLegendItem } from './IssueLegendItem';

const { widget } = figma
const { 
  AutoLayout,
} = widget

interface IProps {
  hillchartIssues: IHillchartIssue[]
}

export function IssueLegend(props: IProps) {

  const { 
    hillchartIssues
  } = props

  return (
    <AutoLayout
      name="Frame10"
      fill="#FFF"
      direction="vertical"
      spacing={10}
      width="fill-parent"
    >
      <AutoLayout
        name="Frame 12"
        overflow="visible"
        spacing={18}
        width="fill-parent"
      >
        <AutoLayout
          name="Column"
          overflow="visible"
          direction="vertical"
          spacing={10}
          width="fill-parent"
        >
          {hillchartIssues
            .filter(i => i.progress < 5)
            .map((issue) => {
              return (
                <IssueLegendItem
                  key={issue.id}
                  issue={issue}
                />
              )
            })
          }
        </AutoLayout>
        <AutoLayout
          name="Column"
          overflow="visible"
          direction="vertical"
          spacing={10}
          width="fill-parent"
        >
          {hillchartIssues
            .filter(i => i.progress >= 5)
            .map((issue) => {
              return (
                <IssueLegendItem
                  key={issue.id}
                  issue={issue}
                />
              )
            })
          }
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  );
}