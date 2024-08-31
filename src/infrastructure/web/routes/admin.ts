import { Router } from "express";
import adminExecuteRule from "../executeRule/admin-execute-rule";

const router = Router();

router.route("/vendors").get(adminExecuteRule("getVendors"));
router.route("/vendor").post(adminExecuteRule("createVendor"));
router
  .route("/:id")
  .delete(adminExecuteRule("rejectVendor"))
  .patch(adminExecuteRule("edit"))
  .get(adminExecuteRule("searchVendor"));
//vendor/:id/edit ---> {inputdata}
//vendor/:id/reject
//vendor/:id/approve
export { router as AdminRoute };
