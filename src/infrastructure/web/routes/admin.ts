import { Router } from "express";
import executeRule from "../execute-rule";

const router = Router();

router.route('/vendor').post(executeRule("sayHello"));
router.route('/vendors')//get all existing vendor
router.route('/vendor')//create vendor
router.route('/vendor')//get vendor
router.route('/vendor')//delete vendor
router.route('/vendor')//update vendor

export {router as AdminRoute}