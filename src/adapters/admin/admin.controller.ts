import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { vendorTDO } from '@useCases/admin/admin.dtos';
import { admin_types } from '@useCases/utils/jd-const';
import { IAdminInteractor } from '@useCases/admin/admin.gateway';

@injectable()
export class AdminController {
  private _interactor: IAdminInteractor;
  constructor(
    @inject(admin_types.admininteractor) adminInteractor: IAdminInteractor,
  ) {
    this._interactor = adminInteractor;
  }
  onUpdateVendor(req: Request, res: Response) {
    this._interactor.updateVendor(req.params.id, <vendorTDO>req.body, res);
  }
  onGetVendorById(req: Request, res: Response) {
    this._interactor.searchVendorById(req.params.id, res);
  }
  onGetVendors(req: Request, res: Response) {
    req.body;
    this._interactor.viewVendors(res);
  }
  onDeleteVendorById(req: Request, res: Response) {
    this._interactor.rejectVendor(req.params.id, res);
  }
  onCreateVendor(req: Request, res: Response) {
    this._interactor.createVendor(<vendorTDO>req.body, res);
  }
  viewCustomers(req: Request, res: Response) {
    this._interactor.viewCustomers(res);
  }
}
