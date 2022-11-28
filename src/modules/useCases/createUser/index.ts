import { CreateUserController } from "./CreateUserController";

export default (): CreateUserController => {
  const createUserController = new CreateUserController();

  return createUserController;

};