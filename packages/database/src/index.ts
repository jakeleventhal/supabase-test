import { PrismaClient } from '@prisma/client/test';

// Export the prisma client
function getPrismaClient() {
  // @ts-ignore
  if (typeof window === 'undefined') {
    return new PrismaClient({
      datasourceUrl: process.env.DATABASE_URL
    });
  }

  // @ts-ignore
  return null;
}

const prisma = getPrismaClient();
export default prisma;
