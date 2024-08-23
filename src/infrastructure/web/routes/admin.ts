import { Router } from "express";
import adminExecuteRule from "../executeRule/admin-execute-rule";

const router = Router();

router.route('/vendor').post(adminExecuteRule("createVendor"))
router.route('/vendor')//create vendor
router.route('/vendor')//get vendor
router.route('/vendor')//delete vendor
router.route('/vendor')//update vendor

export {router as AdminRoute}