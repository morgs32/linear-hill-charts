import { dates } from 'lhc/src/utils/dates';
import { CommentFragment } from 'lhc/src/utils/linear';
import { getHillchartComments } from './getHillchartComments';

interface IProps {
  comments: Array<CommentFragment>
}

export function CommentTimeline(props: IProps) {

  const hillchartComments = getHillchartComments(props.comments)

  if (!hillchartComments.length) {
    return (
      <p className="text-gray-500">No comments</p>
    )
  }

  return (
    <ul className="space-y-6">
      {hillchartComments.map((comment) => (
        <li key={comment.id} className="relative flex gap-x-4">
          {/* <div
            className={clsx(
              activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
              'absolute left-0 top-0 flex w-6 justify-center'
            )}
          >
            <div className="w-px bg-gray-200" />
          </div> */}
          <>
            <div className="mt-3">
              {renderAvatar(comment)}
            </div>
            <div className="flex-auto rounded-md ring-1 ring-inset divide-y divide-gray-200 ring-gray-200">
              <div className="p-3">
                {renderArticle(comment)}
              </div>
              {comment.children.map((comment) => {
                return (
                  <div className="p-3 flex flex-row align-top space-x-3">
                    {renderAvatar(comment)}
                    <div>
                      {renderArticle(comment)}
                    </div>
                  </div>
                )
              })}
            </div>
          </>
          {/* <>
              <div className="relative flex h-6 w-6 rounded-full flex-none items-center justify-center bg-white">
                {activityItem.type === 'paid' ? (
                  <CheckCircleIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                ) : (
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                )}
              </div>
              <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                <span className="font-medium text-gray-900">{activityItem.person.name}</span> {activityItem.type} the
                invoice
                {' '}
                <time dateTime={activityItem.dateTime} className="text-gray-500">
                  {activityItem.date}
                </time>
              </p>
            </> */}
        </li>
      ))}
    </ul>
  );
}

function renderAvatar(comment: CommentFragment) {
  if (comment.user?.avatarUrl) {
    return (
      <img
        src={comment.user.avatarUrl}
        alt=""
        className="relative h-6 w-6 flex-none rounded-full bg-gray-50"
      />
    )
  }
}

function renderArticle(comment: CommentFragment) {
  return (
    <>
      <div className="flex gap-x-4">
        <div className="py-0.5 text-xs leading-5 text-gray-500">
          <span className="font-medium text-gray-900">
            {comment.user ? comment.user.name : 'Unknown user'}
          </span> 
          {' '}
          commented
          {' '}
          <time dateTime={comment.createdAt} className="text-gray-500">
            {dates(comment.createdAt).fromNow()}
          </time>
        </div>
      </div>
      <p className="text-sm leading-6 text-gray-500 whitespace-pre">{comment.body}</p>
    </>
  )
}