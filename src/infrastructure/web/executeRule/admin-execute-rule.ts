import { Request, Response, NextFunction } from "express";
import { AdminCollection } from "../../collections/admin-collection";
import { adminLoadContainer } from "../../containers/admin-container";

export default function adminExecuteRule(rule: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const id = req.params.id;
    const controller = adminLoadContainer().get(AdminCollection);
    try {
      const data =
        body || id
          ? await controller.callFunctionByName(rule, body ? body : id)
          : await controller.callFunctionByName(rule);
      console.log('from exectution rule',data);
      return res.json({ data });
    } catch (err: any) {
      console.error(err.message, { err: err });
      return res.status(500).json({
        name: "unexpected_failure",
        description: "Unexpected server error",
      });
    }
  };
}
