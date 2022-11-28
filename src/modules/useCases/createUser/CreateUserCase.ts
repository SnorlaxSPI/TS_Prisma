import { PrismaClient } from '@prisma/client';
import { CreateUserDTO } from '../dtos/CreateUserDTO';

const prisma = new PrismaClient();

//const clients = client(process.env.DATABASE);

class CreateUserCase {
  async handle({ name, email, city }: CreateUserDTO) {

    const user = prisma.user.create({
      data: {
        name,
        email,
        city,
      },
    });

    return user;
  }; 
};

export { CreateUserCase };
