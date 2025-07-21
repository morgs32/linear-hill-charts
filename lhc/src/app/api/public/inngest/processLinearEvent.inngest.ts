import { IPrisma, myPrisma } from 'lhc/src/utils/myPrisma';
import { inngest } from './inngest';
import {
  ILinearEvent 
} from './fixtures/types';
import { okrs } from 'okrs';
import { createId } from '@paralleldrive/cuid2'
import { z } from 'zod';

export const processLinearEvent = inngest.createFunction(
  { 
    name: 'processLinearEvent' 
  },
  { 
    event: 'processLinearEvent' 
  },
  async (ctx) => {

    const linearEvent = ctx.event.data as ILinearEvent
    const organizationId = okrs.strict(() => {
      try {
        return z.string().parse(linearEvent.organizationId)
      }
      catch (e) {
        throw okrs.handle(e, {
          linearEvent,
        })
      }
    })
    let event = await ctx.step.run('Save linear event', async () => {
      const data: IPrisma.EventCreateInput = {
        payload: linearEvent,
        organization: {
          connectOrCreate: {
            where: {
              id: organizationId,
            },
            create: {
              id: organizationId,
            }
          }
        },
        id: createId(),
      }
      return await myPrisma.event.create({
        data,
      })
        .catch((e) => {
          throw okrs.handle(e, {
            data
          })
        })
    })

    return {
      event,
      body: `Hello ${event.id}!`
    };
  }
);

