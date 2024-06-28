import express from 'express';
import { AdminController, AdminRegi} from '../controllers/AdminController';
import { AdminInteractor } from '../interactors/AdminInteractor';

const router = express.Router();

const controller = new AdminController(new AdminInteractor());

router.post('/signin',AdminRegi);
router.post('/vandor',controller.onCreateVandor.bind(controller));
router.get('/vandors', controller.onGetVandors.bind(controller));
router.get('/vandor/:id',controller.onGetVandorById.bind(controller));

export {router as AdminRoute}