import { NextFunction, Request, Response } from "express";
import { myService } from "../../adapters/admin/admin.controller";

export default function executeRule(rule: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    try {
      console.log(myService.callFunctionByName(rule, "gap"));
      return res.send("name");
    } catch (err: any) {
      console.error(err.message, { err: err });
      return res.status(500).json({
        name: "unexpected_failure",
        description: "Unexpected server error",
      });
    }
  };
}
