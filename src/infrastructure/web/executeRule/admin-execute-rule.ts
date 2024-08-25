import { Request, Response, NextFunction } from "express";
import { AdminCollection } from "../../collections/admin-collection";
import { adminLoadContainer } from "../../containers/admin-container";

export default function adminExecuteRule(rule: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const controller = adminLoadContainer().get(AdminCollection);
    try {
      return await controller.callFunctionByName(rule, req, res);
    } catch (err: any) {
      console.error(err.message, { err: err });
      return res.status(500).json({
        name: "unexpected_failure",
        description: "Unexpected server error",
      });
    }
  };
}
