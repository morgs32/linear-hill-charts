import { CommentFragment, IHillchartComment } from 'lhc/index';
import { ProgressBadge } from './ProgressBadge';
import { matchProgress } from 'lhc/src/app/[organizationId]/[projectId]/matchProgress';

const { widget } = figma
const { 
  AutoLayout,
  Text,
  Rectangle,
  Ellipse,
  Line
} = widget

interface IProps {
  comment: IHillchartComment | CommentFragment
}

export function Comment(props: IProps) {

  const { 
    comment
  } = props

  const isChild = !('children' in comment)

  const progress = matchProgress(comment.body)
  return (
    <AutoLayout
      fill="#FFF"
      overflow="visible"
      direction="horizontal"
      spacing={16}
      height="hug-contents"
      width="fill-parent"
    >
      <AutoLayout
        overflow="visible"
        direction="vertical"
        spacing={8}
        height="fill-parent"
        horizontalAlignItems="center"
      >
    
        <AutoLayout
          width={32}
          height={32}
          horizontalAlignItems="center"
          verticalAlignItems="center"
        >
          <Ellipse
            fill={comment.user?.avatarUrl ? {
              type: 'image',
              src: comment.user.avatarUrl,
              scalingFactor: 0.5,
            } : '#E5E5E5'}
            width={32}
            height={32}
          />
          {!comment.user?.avatarUrl && (
            <Text
              name="MI"
              fill="#000"
              fontSize={18}
              fontWeight={700}
              textCase="upper"
            >
              {comment.user ? comment.user.name.split(' ').slice(0, 2).map(w => w[0]) : '?'}
            </Text>
          )}
        </AutoLayout>

        {!isChild && (
          <>
            <Line
              x={15}
              y={-16}
              positioning='absolute'
              stroke="#000"
              length={8}
              strokeWidth={2}
              rotation={-90}
            />
            <Rectangle
              fill="#000"
              width={2}
              height="fill-parent"
            />
          </>
        )}
      </AutoLayout>
      <AutoLayout
        overflow="visible"
        direction="vertical"
        spacing={16}
        height="hug-contents"
        width="fill-parent"
      >
        <AutoLayout
          name="Heading "
          overflow="visible"
          spacing={16}
          width="fill-parent"
        >
          <AutoLayout
            overflow="visible"
            direction="vertical"
            spacing={10}
            height="hug-contents"
            width="fill-parent"
          >
            <Text
              name="shadezie"
              fill="#000"
              width="fill-parent"
              fontWeight={700}
            >
              {comment.user ? comment.user.name : 'Anonymous'}
            </Text>
            <Text
              fill="#000"
              width="fill-parent"
            >
              {comment.body}
            </Text>
          </AutoLayout>
          {progress && <ProgressBadge progress={progress} />}
        </AutoLayout>
        {!isChild && comment.children.map((childComment) => {
          return (
            <Comment comment={childComment} />
          )
        })}
      </AutoLayout>
    </AutoLayout>
  );
}