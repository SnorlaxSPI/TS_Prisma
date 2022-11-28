import { User } from '@prisma/client';
import { prismaClient } from '../../../database/prismaClient';

class ListUserCase {
  async handle(): Promise<User[]> {
    const users = await prismaClient.user.findMany({});

    return users;
  }
};

export { ListUserCase };