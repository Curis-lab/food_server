import express from 'express';
import { vendorExecuteRule } from '../executeRule/vendor-execute-rule';
import { AuthVerify } from '../middlewares/auth-verify';

const router = express.Router();

router.route('/login').post(vendorExecuteRule('login'));
router.route('/food').post(AuthVerify, vendorExecuteRule('addfood'));
router.route('/foods').get(AuthVerify, vendorExecuteRule('foods')); //add food
router.route('/profile').get(AuthVerify, vendorExecuteRule('profile'));
//edit/view food
router.route('/:id/food').get(AuthVerify, vendorExecuteRule('viewFood'));

// router.route('/:id/food').delete(vendorExecuteRule('deleteFood')); //get food by id

export { router as VendorRoute };
