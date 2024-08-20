import { Router } from "express";
import { MainAdminController } from "../../../adapters/admin/admin.controller";

const router = Router();
const controller = new MainAdminController();

router.post('/vendor', controller.createVendor());

export {router as AdminRoute}