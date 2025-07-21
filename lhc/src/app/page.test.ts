import { getUser } from './getUser';

describe('page', () => {
  it('works', async () => {
    
    const user = await getUser('user1')
    expect(user?.id).toMatchInlineSnapshot('"user1"')
  });
});