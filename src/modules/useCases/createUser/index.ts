import { CreateUserCase } from "./CreateUserCase";
import { CreateUserController } from "./CreateUserController";

export default (): CreateUserController => {
  const createUserCase = new CreateUserCase();
  const createUserController = new CreateUserController();

  return createUserController;

};