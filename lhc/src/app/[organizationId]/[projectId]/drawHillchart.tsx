import {
  hillHeight,
  hillWidth,
  paddingX,
  paddingY 
} from './dimensions';
import { drawAxes } from './drawAxes';
import { bellCurve } from './drawBellCurve';
import { drawIssues } from './drawIssues';


interface IProps {
  activeIssueId?: string;
  hillchartIssues?: {
    id: string;
    title: string
    progress: number;
  }[];
}

export function drawHillchart(props?: IProps) {

  return `
    <svg
      overflow="hidden"
      viewBox="0 0 ${hillWidth + paddingX * 2} ${hillHeight + paddingY * 2}"
    >
      ${drawAxes()}
      ${bellCurve()}
      ${props && drawIssues(props)}
    </svg>`
}
