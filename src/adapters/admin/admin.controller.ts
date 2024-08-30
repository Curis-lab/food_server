import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import AdminPresenter from "./admin.presenter";
import HTTPRequest from "adapters/common/models/http-request";
import { vendorTDO } from "use-cases/admin/admin.dtos";
import { admin_types } from "../../use-cases/utils/jd-const";
import AdminGateway from "use-cases/admin/admin.gateway";
import HTTPCreateVendorBody from "use-cases/vendor/vendor.dtos";


@injectable()
export class AdminController {
  private _interactor: AdminGateway;
  private presenter:AdminPresenter;
  constructor(
    @inject(admin_types.admininteractor) adminInteractor: AdminGateway,
    @inject(admin_types.adminpresenter) adminPresenter: AdminPresenter
  ) {
    this._interactor = adminInteractor;
    this.presenter = adminPresenter;
  }
  async onUpdateVendor(req: Request, res: Response) {
    const vendorId = req.params.id;
    const updateVendorDetails:any = <vendorTDO>req.body;
    if(!vendorId|| Object.keys(updateVendorDetails).length == 0){
      return this.presenter.showError("Vendor Id and update are required",res);
    }
    const vendor = await this._interactor.updateVendor(vendorId, updateVendorDetails);

    return this.presenter.showSucces(vendor, res);
  }
  async onGetVendorById(req: Request, res: Response) {
    const id = req.params.id;
    const vendor = await this._interactor.searchVendorById(id);
    return this.presenter.showSucces(vendor, res);
  }
  async onGetVendors(req: Request, res: Response) {
    const data = await this._interactor.viewVendors();
    return this.presenter.showSucces(data,res);
  }
  async onDeleteVendorById(req: Request, res: Response) {
    const msg = await this._interactor.rejectVendor(req.params.id);
    return this.presenter.showSucces(msg, res)
  }
  async onCreateVendor(req: Request, res: Response) {
    const vendorDetails: vendorTDO = <HTTPCreateVendorBody>req.body;
    const request:HTTPRequest<void, void,HTTPCreateVendorBody,void> = {
      body:vendorDetails
    }
    const data = await this._interactor.createVendor(vendorDetails);
    return this.presenter.showSucces(data, res)
  }
}
