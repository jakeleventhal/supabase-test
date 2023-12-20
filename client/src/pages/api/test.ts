import prisma from '@test/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const appData = await prisma!.appData.findFirstOrThrow();

  return res.status(200).send(appData);
};
