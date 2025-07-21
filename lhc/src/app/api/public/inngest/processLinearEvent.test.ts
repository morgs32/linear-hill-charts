import { myPrisma } from 'lhc/src/utils/myPrisma';

describe('processLinearEvent', () => {
  it.skip('works', async () => {
    const event = await myPrisma.event.create({
      data: {
        organizationId: 'c8986123-11f1-4eef-8227-55102f7eac46',
        payload: {
          action: 'update',
          createdAt: '2023-07-12T14:49:34.508Z',
          data: {
            body: 'Foobar',
            createdAt: '2023-07-12T14:49:34.508Z',
            id: 'd9651aa5-a970-4d8e-81d6-ebbbb47e91e3',
            issue: {
              id: '6a17c5cc-5188-4487-ab56-44626a9b2daf',
              title: 'Save linear events',
            },
            issueId: '6a17c5cc-5188-4487-ab56-44626a9b2daf',
            reactionData: [],
            updatedAt: '2023-07-12T14:49:34.508Z',
            user: {
              id: '14982762-f00e-4595-8dc5-5a93d8ba4ba2',
              name: 'Morgan',
            },
            userId: '14982762-f00e-4595-8dc5-5a93d8ba4ba2',
          },
          organizationId: 'c8986123-11f1-4eef-8227-55102f7eac46',
          type: 'Comment',
          updatedFrom: {},
          url: 'https://linear.app/linear-hill-charts/issue/LIN-28#comment-d9651aa5',
          webhookTimestamp: 1689173374611,
        },
        id: 'd9651aa5-a970-4d8e-81d6-ebbbb47e91e3',
      },
    });

    expect(event.id).toMatchInlineSnapshot(
      '"d9651aa5-a970-4d8e-81d6-ebbbb47e91e3"'
    );
  });
});
