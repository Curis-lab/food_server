import express from 'express';
import { AdminController, AdminRegi, CreateVandor} from '../controllers/AdminController';

const router = express.Router();

const controller = new AdminController();

// router.post('/login',AdminLogin);
router.post('/signin',AdminRegi);
router.post('/vandor',CreateVandor);
router.get('/vandors', controller.onGetVandors);
router.get('/vandor/:id',controller.onGetVandorById);


export {router as AdminRoute}