import {Request, Response, NextFunction} from 'express';
import { AdminCollection } from '../../collections/admin-collection';
import { adminLoadContainer } from '../../containers/admin-container';

export default function adminExecuteRule(rule: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
      const body = req.body;
      const controller = adminLoadContainer().get(AdminCollection);
      try {
        const data = controller.callFunctionByName(rule, "gap");
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