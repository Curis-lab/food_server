import { NextFunction, Request, Response } from "express";
import { myService } from "../../adapters/admin/admin.controller";

export default function executeRule(rule: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    try {
        //controllers
      const data = myService.callFunctionByName(rule, "gap");
      console.log(data);
      return res.json({data});
    } catch (err: any) {
      console.error(err.message, { err: err });
      return res.status(500).json({
        name: "unexpected_failure",
        description: "Unexpected server error",
      });
    }
  };
}
