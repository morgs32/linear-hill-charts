import { qi } from './qi';


describe('typewind', () => {
  it('works', async () => {
    
    expect(qi['h1'].str()).toMatchInlineSnapshot('"text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"')

  });
});