import { inngest } from './inngest';

export const hello = inngest.createFunction(
  { 
    name: 'hello' 
  },
  { 
    event: 'hello' 
  },
  async ({ event, step }) => {
    await step.sleep('1s');
    return {
      event,
      body: `Hello ${event.data.email}!`
    };
  }
);

