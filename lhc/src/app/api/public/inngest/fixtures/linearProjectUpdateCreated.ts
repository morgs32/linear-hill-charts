export const linearProjectUpdateCreated = {
  action: 'create' as const,
  type: 'ProjectUpdate' as const,
  createdAt: '2023-07-11T13:38:35.397Z',
  data: {
    id: '60d745e1-a432-4928-9060-2c25b1ae85d4',
    createdAt: '2023-07-11T13:38:35.397Z',
    updatedAt: '2023-07-11T13:38:35.397Z',
    body: 'This is an update',
    projectId: '30c1f0c4-086a-4f38-bd9c-48c63e2be880',
    health: 'onTrack',
    userId: '14982762-f00e-4595-8dc5-5a93d8ba4ba2',
    infoSnapshot: {
      state: 'planned',
      leadId: '14982762-f00e-4595-8dc5-5a93d8ba4ba2',
      memberIds: ['14982762-f00e-4595-8dc5-5a93d8ba4ba2'],
      teamsInfo: [
        {
          id: 'df657590-816b-4754-9518-68e6cc61f275',
          issueInfo: {
            triageCount: 0,
            backlogCount: 2,
            startedCount: 0,
            canceledCount: 0,
            completedCount: 0,
            unstartedCount: 0,
          },
        },
      ],
      milestonesInfo: [],
    },
    project: {
      id: '30c1f0c4-086a-4f38-bd9c-48c63e2be880',
      name: 'Testing',
    },
    user: {
      id: '14982762-f00e-4595-8dc5-5a93d8ba4ba2',
      name: 'Morgan',
    },
    roadmaps: [],
  },
  organizationId: 'c8986123-11f1-4eef-8227-55102f7eac46',
  webhookTimestamp: 1689082715501,
};
