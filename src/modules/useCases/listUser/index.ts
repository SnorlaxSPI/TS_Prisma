import { ListUserCase } from "./ListUserCase";
import { ListUserController } from "./ListUserController";

export default (): ListUserController => {
  const listUserCase = new ListUserCase();
  const listUserController = new ListUserController();

  return listUserController;

};