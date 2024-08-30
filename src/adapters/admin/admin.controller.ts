import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { vendorTDO } from "use-cases/admin/admin.dtos";
import { admin_types } from "../../use-cases/utils/jd-const";
import {IAdminInteractor} from "use-cases/admin/admin.gateway";
import HTTPCreateVendorBody from "use-cases/vendor/vendor.dtos";


@injectable()
export class AdminController {
  private _interactor: IAdminInteractor;
  constructor(
    @inject(admin_types.admininteractor) adminInteractor: IAdminInteractor,
  ) {
    this._interactor = adminInteractor;
  }
  onUpdateVendor(req: Request, res: Response) {
    const vendorId = req.params.id;
    const updateVendorDetails:any = <vendorTDO>req.body;
    this._interactor.updateVendor(vendorId, updateVendorDetails, res);
  }
  onGetVendorById(req: Request, res: Response) {
    const id = req.params.id;
    this._interactor.searchVendorById(id, res);
  }
  onGetVendors(req: Request, res: Response) {
    this._interactor.viewVendors(res);
  }
  onDeleteVendorById(req: Request, res: Response) {
    this._interactor.rejectVendor(req.params.id, res);
  }
  onCreateVendor(req: Request, res: Response) {
    const vendorDetails: vendorTDO = <HTTPCreateVendorBody>req.body;
    this._interactor.createVendor(vendorDetails, res);
  }
}
