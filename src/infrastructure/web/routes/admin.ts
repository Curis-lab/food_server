import { parentPort } from "worker_threads";

import { Router } from "express";
import adminExecuteRule from "../executeRule/admin-execute-rule";

const router = Router();
router.route("/customers").get(adminExecuteRule("customers"));
router.route("/vendors").get(adminExecuteRule("getVendors"));
router.route("/vendor").post(adminExecuteRule("createVendor"));
router
  .route("/:id")
  .delete(adminExecuteRule("rejectVendor"))
  .patch(adminExecuteRule("edit"))
  .get(adminExecuteRule("searchVendor"));
export { router as AdminRoute };
