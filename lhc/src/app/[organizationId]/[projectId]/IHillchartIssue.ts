import { CommentFragment, IssueFragment } from 'lhc/src/utils/linear';


export interface IHillchartIssue extends Omit<IssueFragment, 'comments'> {
  progress: number;
  comments: CommentFragment[]
}
