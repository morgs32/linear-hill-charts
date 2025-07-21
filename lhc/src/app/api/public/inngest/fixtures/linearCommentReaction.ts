export const linearCommentReaction = {
  action: 'update' as const,
  type: 'Comment' as const,
  createdAt: '2023-06-19T23:49:18.702Z',
  data: {
    id: '5a2efa75-9bed-43c0-9650-b1c692c543ae',
    createdAt: '2023-06-19T20:14:45.676Z',
    updatedAt: '2023-06-19T23:49:18.702Z',
    body: 'Still trying. and trying. and trying. again. again. again. again. again. again. again. again. again',
    issueId: '6a17c5cc-5188-4487-ab56-44626a9b2daf',
    userId: '14982762-f00e-4595-8dc5-5a93d8ba4ba2',
    editedAt: '2023-06-19T20:51:47.186Z',
    reactionData: [
      {
        emoji: 'eyes',
        reactions: [
          {
            id: '486ebae7-7ee6-44fb-844d-52ffd57763de',
            userId: '14982762-f00e-4595-8dc5-5a93d8ba4ba2',
            reactedAt: '2023-06-19T23:49:18.673Z',
          },
        ],
      },
    ],
    issue: {
      id: '6a17c5cc-5188-4487-ab56-44626a9b2daf',
      title: 'Save comments!',
    },
    user: {
      id: '14982762-f00e-4595-8dc5-5a93d8ba4ba2',
      name: 'Morgan',
    },
  },
  updatedFrom: {
    updatedAt: '2023-06-19T20:51:47.186Z',
    reactionData: [],
  },
  url: 'https://linear.app/linear-hill-charts/issue/LIN-28#comment-5a2efa75',
  organizationId: 'c8986123-11f1-4eef-8227-55102f7eac46',
  webhookTimestamp: 1687218558770,
};
