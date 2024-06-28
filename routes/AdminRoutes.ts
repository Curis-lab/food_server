import express from 'express';
import { AdminController, AdminRegi} from '../controllers/AdminController';
import { AdminInteractor } from '../interactors/AdminInteractor';

const router = express.Router();

const adminInteractor = new AdminInteractor()
const controller = new AdminController(adminInteractor);

router.post('/signin',AdminRegi);
router.post('/vandor',controller.onCreateVandor.bind(controller));
router.get('/vandors', controller.onGetVandors.bind(controller));
router.get('/vandor/:id',controller.onGetVandorById.bind(controller));

export {router as AdminRoute}