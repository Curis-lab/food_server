import express from 'express';
import HttpAdminController, {
  AdminRegi,
} from '../../adapters/admin/http-admin.controller';
import { AdminInteractor } from '../../use-cases/common/get-vendor-data/get-vendor-data.interactor';
import { AdminRepository } from '../../adapters/common/repositories/vendor.rep';
import { Vandor } from '../../../models';

const router = express.Router();

const repository = new AdminRepository(Vandor);
const interactor = new AdminInteractor(repository);
const controller = new HttpAdminController(interactor);

router.post('/signin', AdminRegi);
router.post('/vandor', controller.onCreateVandor.bind(controller));
router.get('/vandors', controller.onGetVandors.bind(controller));
router.get('/vandor/:id', controller.onGetVandorById.bind(controller));
router.delete('/vandor/:id', controller.onDeleteVandorById.bind(controller));
router.put('/vandor/:id', controller.onUpdateVandor.bind(controller));

export { router as AdminRoute };
