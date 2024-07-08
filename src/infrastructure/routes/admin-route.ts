import express from "express";
import HttpAdminController, {
  AdminRegi,
} from "../../adapters/admin/http-admin.controller";
import { AdminInteractor } from "../../../interactors/AdminInteractor";
import { AdminRepository } from "../../../repositories/adminRepository";

const router = express.Router();

const repository = new AdminRepository();
const interactor = new AdminInteractor(repository);
const controller = new HttpAdminController(interactor);

router.post("/signin", AdminRegi);
router.post("/vandor", controller.onCreateVandor.bind(controller));
router.get("/vandors", controller.onGetVandors.bind(controller));
router.get("/vandor/:id", controller.onGetVandorById.bind(controller));
router.delete("/vandor/:id", controller.onDeleteVandorById.bind(controller));
router.put("/vandor/:id", controller.onUpdateVandor.bind(controller));

export { router as AdminRoute };
