import express from 'express';
import { AdminController, AdminRegi} from '../controllers/AdminController';
import { AdminInteractor } from '../interactors/AdminInteractor';
import { AdminRepository } from '../repositories/adminRepository';

const router = express.Router();

const repository = new AdminRepository();
const interactor = new AdminInteractor(repository);
const controller = new AdminController(interactor);

router.post('/signin',AdminRegi);
router.post('/vandor',controller.onCreateVandor.bind(controller));
router.get('/vandors', controller.onGetVandors.bind(controller));
router.get('/vandor/:id',controller.onGetVandorById.bind(controller));
router.delete('/vandor/:id');

export {router as AdminRoute}