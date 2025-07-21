import { HillchartBagQuery } from 'lhc/src/utils/linear'
import { matchProgress } from './matchProgress'
import { IHillchartIssue } from './IHillchartIssue'

interface IProps {
  hillchartBag: HillchartBagQuery
}

export function getHillchartIssues({ hillchartBag }: IProps): Array<IHillchartIssue> {
  
  const issues = hillchartBag.project.issues.nodes.map(issue => {
    const comments = issue.comments.nodes.slice().reverse()
    const progress = comments.reduce((acc, comment) => {
      const match = matchProgress(comment.body)
      return match || acc
    }, 0)
    return {
      ...issue,
      comments,
      progress
    }
  })
  return issues?.sort((a, b) => a.progress - b.progress);

}