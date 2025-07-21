import { serve } from 'inngest/next'
import { inngest } from './inngest';
import { hello } from './hello';
import { processLinearEvent } from './processLinearEvent.inngest';

export const runtime = 'edge'

// Create an API that serves zero functions
export const {
  GET,
  POST,
  PUT
} = serve(inngest, [
  hello, 
  processLinearEvent,
]);

