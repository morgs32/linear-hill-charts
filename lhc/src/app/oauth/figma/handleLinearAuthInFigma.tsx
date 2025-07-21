import { getSdk } from 'lhc/src/utils/linear';
import { IPrisma, myPrisma } from 'lhc/src/utils/myPrisma';
import { GraphQLClient } from 'graphql-request';
import { okrs } from 'okrs';
import { z } from 'zod';
import { getLinearAuth } from '../getLinearAuth';

interface IProps {
  writeKey: string
  code: string
}

export async function handleLinearAuthInFigma(props: IProps): Promise<okrs.Either<IPrisma.FigmaAuthGetPayload<{}>>> {

  const {
    writeKey, 
    code,
  } = props;

  const linearAuth = await getLinearAuth({
    code,
    redirect_uri: z.string().parse(process.env.NEXT_PUBLIC_LINEAR_FIGMA_REDIRECT_URL)
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
      viewer, 
      organization,
    }
  } = await sdk.userAndOrganization();

  const data: IPrisma.FigmaAuthCreateInput = {
    linearId: viewer.id,
    email: viewer.email,
    name: viewer.name,
    avatarUrl: viewer.avatarUrl,
    accessToken: linearAuth.access_token,
    workspaceKey: writeKey,
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
  }
  return okrs.coerce(() => {
    return myPrisma.figmaAuth.create({
      data,
    })
  }, {
    data
  });
}
;
