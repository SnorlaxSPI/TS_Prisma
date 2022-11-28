import { Request, response, Response } from "express";
import { ListUserCase } from '../listUser/ListUserCase';

class ListUserController {
  
  async get_controller(request: Request, response: Response) {
    const { name, email, city } = request.body;

    const listUserCase = new ListUserCase();

    const user = await listUserCase.handle();

    return response.status(200).json(user);
  }
};

export { ListUserController };