import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CreateUserCase } from "./CreateUserCase";

//mmiddlewares de validação

const prisma = new PrismaClient();

class CreateUserController {
  async post_Controller(request: Request, response: Response) {
    
    const { name, email, city } = request.body;
    
    const createUserCase = new CreateUserCase();

    const userAlreadyExists = await prisma.user.findFirst({ where: { email } });
      
    if (userAlreadyExists) {
       return response.status(400).json({ error: "Já existe um e-mail" });
    };
    
    const user = await createUserCase.handle({ name, email, city });

    return response.status(201).json(user);
  }
};

export { CreateUserController };

