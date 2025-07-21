import { CommentFragment } from 'lhc/src/utils/linear'

export function getHillchartComments(comments: CommentFragment[]) {
  const hash: Record<string, CommentFragment[]> = {}
  return comments.filter((comment) => {
    if (comment.parent) {
      hash[comment.parent.id].push(comment)
      return false
    }
    hash[comment.id] = []
    return true
  })
    .map(comment => ({
      ...comment,
      children: hash[comment.id]
    }))

}