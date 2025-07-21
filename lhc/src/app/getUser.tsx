import { myPrisma } from 'lhc/src/utils/myPrisma';

export function getUser(userId: string) {
  return myPrisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      linearAuths: {
        include: {
          organization: true
        }
      }
    }
  });
}
