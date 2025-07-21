import { getColorForPercentage, rgbToHex } from './getColorForPercentage';
import { plotOnHill } from './drawBellCurve';
import {
  hillHeight,
  hillWidth,
  paddingX,
  paddingY 
} from './dimensions';

interface IProps {
  activeIssueId?: string;
  hillchartIssues?: {
    id: string;
    title: string;
    progress: number;
  }[];
}

export function drawIssues(props: IProps) {

  const { 
    hillchartIssues,
    activeIssueId,
  } = props;
  
  const countAtProgress: Record<number, number> = {}
  const numHiddenAtProgress: Record<number, number> = {}

  const visible = hillchartIssues?.map((issue) => {
    const rounded = Math.round(issue.progress * 4) / 4; // Round to nearest 0.25
    const progress = rounded / 10
    const x = progress * hillWidth + paddingX
    const isActive = issue.id === activeIssueId;

    if (countAtProgress[progress] > 3 && !isActive) {
      numHiddenAtProgress[progress] = numHiddenAtProgress[progress] || 0;
      numHiddenAtProgress[progress] += 1;
      return ''
    }
    countAtProgress[progress] = countAtProgress[progress] || 0;    
    const y = hillHeight + paddingY - (plotOnHill(progress) * hillHeight) - countAtProgress[progress] * 12
    countAtProgress[progress] += 1;

    /**
     * Ok if it's the last circle then put a circle above it with the +however remain
     */

    return `
      <circle
        cx="${x}"
        cy="${y}"
        r="8"
        fill="${rgbToHex(getColorForPercentage(issue.progress / 10))}"
        opacity="${isActive ? 1 : 0.4}"
      />
    `
  }).join('')

  const hidden = Object.entries(numHiddenAtProgress).map(([str, numHidden]) => {
    const progress = parseFloat(str)
    const x = progress * hillWidth + paddingX
    const y = hillHeight + paddingY - (plotOnHill(progress) * hillHeight) - countAtProgress[progress] * 12
    return `
      <text
        x="${x - 10}"
        y="${y}"
        font-size="12"
        fill="#565656"
      >
        +${numHidden} 
      </text>
    `
  }).join('')

  return `${visible}${hidden}`

}
