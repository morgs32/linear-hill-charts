import { myPrisma } from 'lhc/src/utils/myPrisma';


export async function getOrganizationLinearAccessToken(organizationId: string) {
  const linearAuth = await myPrisma.linearAuth.findFirst({
    where: {
      organizationId,
    }
  });
  if (!linearAuth) throw new Error('No linearAuth found');
  return linearAuth.accessToken;
}
