import CustomerController from "../../../adapters/customer/customer.controller";
import { Router } from "express";

const router = Router();
const controller = new CustomerController();
router.route("/").post(controller.signUp.bind(controller));

router.route("/:id/customer").delete(controller.deleteAccount.bind(controller))
.get(controller.viewProfile.bind(controller)).patch(controller.updateProfile.bind(controller));
router.route('/:id/order');
export { router as CustomerRoute };
