import express from 'express';
import { CustomerLogin, CustomerSignUp, GetProfile } from '../controllers';
import { Authenticate } from '../middlewares';

const router = express.Router();

router.post('/signin',CustomerSignUp);
router.post('/login',CustomerLogin);
//Auth
router.use(Authenticate);

// router.patch('/verify');
router.get('/profile', GetProfile);
// router.patch('/profile');

export {router as CustomerRoute};