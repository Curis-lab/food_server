import express from 'express';
import { CustomerSignUp } from '../controllers/CustomerController';

const router = express.Router();

/**--------Signup/ Create Customer---------*/
router.post('/signup',CustomerSignUp);
/**-------------login------------- */

/** verify customer */
/** otp and request otp */
/** Profile */


//Cart
//Order
//Payment


export {router as CustomerRoutes}