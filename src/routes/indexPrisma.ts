import Router from 'express';
import listUserController from '../modules/useCases/listUser/index';
import createUserController from '../modules/useCases/createUser/index';

const router = Router();

router.post('/clients', createUserController().post_Controller);
router.get('/clients', listUserController().get_controller);

export { router };