import express from 'express';
import { CreateOrder, CustomerLogin, CustomerSignUp, GetProfile } from '../controllers';
import { Authenticate } from '../middlewares';

const router = express.Router();

router.post('/signin',CustomerSignUp);
router.post('/login',CustomerLogin);
//Auth
router.use(Authenticate);

// router.patch('/verify');
router.get('/profile', GetProfile);
// router.patch('/profile');
router.post('/create-order',CreateOrder);


export {router as CustomerRoute};