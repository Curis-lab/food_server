import CustomerController from '../../../adapters/customer/customer.controller';
import { Router } from 'express';
import { AuthVerify } from '../middlewares/auth-verify';

const router = Router();
const controller = new CustomerController();
router.route('/signin').post(controller.signUp.bind(controller));
router.route('/login').post(controller.login.bind(controller));
router
  .route('/')
  .delete(AuthVerify, controller.deleteAccount.bind(controller))
  .get(AuthVerify, controller.viewProfile.bind(controller))
  .patch(AuthVerify, controller.updateProfile.bind(controller));

router
  .route('/:id/customer')
  .delete(controller.deleteAccount.bind(controller))
  .get(controller.viewProfile.bind(controller))
  .patch(controller.updateProfile.bind(controller));
router.route('/:id/order');
export { router as CustomerRoute };
