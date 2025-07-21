import { GraphQLClient } from 'graphql-request';
import { getSdk } from 'lhc/src/utils/linear';
import { myPrisma } from 'lhc/src/utils/myPrisma';
import { redirect } from 'next/navigation';
import { getOrganizationLinearAccessToken } from './getOrganizationLinearAccessToken';

export async function getLinearGraphqlSdk(organizationId: string) {

  const organization = await myPrisma.organization.findUnique({
    where: {
      id: organizationId
    },
  })

  if (!organization) {
    redirect('/')
  }

  const client = new GraphQLClient('https://api.linear.app/graphql', {
    fetch,
    headers: {
      Authorization: `Bearer ${await getOrganizationLinearAccessToken(organizationId)}`,
    }
  })
  return getSdk(client);

}