import { Request, Response, NextFunction } from "express";
import { vendorLoadContainer } from "../../containers/vendor-container";
import { VendorCollection } from "../../collections/vendor-collection";

export function vendorExecuteRule(rule: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const reqData = req.body;
    const id = req.params.id;

    const controller = vendorLoadContainer().get(VendorCollection);

    try {
      const data = await controller.callFunctionByName(rule, req);
      return res.send({data});
    } catch (err) {
      res.status(500).json({
        name: "unexpected_failure",
        description: "Unexpected server error",
      });
    }
  };
}
