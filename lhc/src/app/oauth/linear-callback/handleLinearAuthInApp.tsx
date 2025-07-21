import { IPrisma, myPrisma } from 'lhc/src/utils/myPrisma';
import { okrs } from 'okrs';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from 'lhc/src/utils/linear';
import { getLinearAuth } from '../getLinearAuth';
import { unsealData } from 'iron-session/edge';
import { z } from 'zod';

interface IProps {
  state: string;
  code: string;
}

export async function handleLinearAuthInApp(props: IProps): Promise<okrs.Either<IPrisma.LinearAuthGetPayload<{}>>> {

  const {
    code, 
    state,
  } = props;

  const linearAuth = await getLinearAuth({
    code,
    redirect_uri: z.string().parse(process.env.NEXT_PUBLIC_LINEAR_LHC_REDIRECT_URL)
  });
  const userId = await okrs.strict(async () => {
    const { userId } = await unsealData(state, {
      password: z.string().parse(process.env.SESSION_SECRET)
    });
    return z.string().parse(userId);
  });

  const client = new GraphQLClient('https://api.linear.app/graphql', {
    fetch,
    headers: {
      Authorization: `Bearer ${linearAuth.access_token}`,
    }
  });
  const sdk = getSdk(client);
  const {
    data: {
      viewer, organization,
    }
  } = await sdk.userAndOrganization();

  const data: IPrisma.LinearAuthUpsertArgs = {
    where: {
      userId
    },
    create: {
      linearId: viewer.id,
      email: viewer.email,
      name: viewer.name,
      avatarUrl: viewer.avatarUrl,
      accessToken: linearAuth.access_token,
      user: {
        connectOrCreate: {
          where: {
            id: userId
          },
          create: {
            id: userId, // Remember, our id is the clerk id
          }
        }
      },
      organization: {
        connectOrCreate: {
          where: {
            id: organization.id
          },
          create: {
            name: organization.name,
            id: organization.id,
          }
        }
      }
    },
    update: {
      accessToken: linearAuth.access_token,
    }
  };
  return okrs.coerce(() => {
    return myPrisma.linearAuth.upsert(data);
  }, {
    data
  });
}
;
