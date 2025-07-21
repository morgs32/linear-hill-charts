import { CommentFragment } from 'lhc/src/utils/linear';


export interface IHillchartComment extends CommentFragment {
  children: CommentFragment[];
}
