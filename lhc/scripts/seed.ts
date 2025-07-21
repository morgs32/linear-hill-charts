import { myPrisma } from 'lhc/src/utils/myPrisma';
import dotenv from 'dotenv';
dotenv.config()

async function main() {

  /**
   * Create user
   */

  await myPrisma.user.create({
    data: {
      id: 'user1',
    }
  })

  
}

main()
  .catch(e => console.error(e))