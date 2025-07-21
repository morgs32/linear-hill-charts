import { linearCommentCreated } from './linearCommentCreated'
import { linearCommentUpdated } from './linearCommentUpdated'
import { linearCommentReaction } from './linearCommentReaction'
import { linearIssueCreated } from './linearIssueCreated'
import { linearProjectUpdateCreated } from './linearProjectUpdateCreated'

export type ILinearCommentCreated = typeof linearCommentCreated
export type ILinearCommentUpdated = typeof linearCommentUpdated
export type ILinearCommentReaction = typeof linearCommentReaction
export type ILinearIssueCreated = typeof linearIssueCreated
export type ILinearProjectUpdateCreated = typeof linearProjectUpdateCreated

export type ILinearEvent = 
| ILinearCommentCreated
| ILinearCommentUpdated
| ILinearCommentReaction
| ILinearIssueCreated
| ILinearProjectUpdateCreated