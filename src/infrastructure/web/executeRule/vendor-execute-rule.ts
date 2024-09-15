import { Request, Response, NextFunction } from 'express';
import { vendorLoadContainer } from '../../containers/vendor-container';
import { VendorCollection } from '../../collections/vendor-collection';

export function vendorExecuteRule(rule: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const controller = vendorLoadContainer().get(VendorCollection);

    try {
      return await controller.callFunctionByName(rule, req, res);
    } catch (err) {
      return res.status(500).json({
        name: 'unexpected_failure',
        description: 'Unexpected server error',
      });
    }
  };
}
