import { Comment } from './Comment'
import { CommentFragment, getHillchartComments } from 'lhc/index'

const { widget } = figma
const { 
  AutoLayout,
} = widget

interface IProps {
  comments: CommentFragment[]
}

export function CommentThread(props: IProps) {

  const comments = getHillchartComments(props.comments)
  
  if (!comments.length) return null

  return (
    <AutoLayout
      direction="vertical"
      spacing={16}
      width="fill-parent"
    >
      {comments.map((comment) => {
        return (
          <Comment comment={comment} />
        )
      })}
    </AutoLayout>
  )

}