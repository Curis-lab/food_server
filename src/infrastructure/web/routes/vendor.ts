import express from "express";
import { vendorExecuteRule } from "../executeRule/vendor-execute-rule";

const router = express.Router();



router.route("/profile/:id").get(vendorExecuteRule("profile"));
router.route("/login").post(vendorExecuteRule("login"));
router.route("/:id"); //update specific profile
router.route("/food"); //add food
router.route("/:id/food"); //get food by id
router.route("/:id"); //update vendor cover images

export { router as VendorRoute };
