import { inject, injectable } from "inversify";
import { IVendorInput } from "../../../dto";
import { admin_types } from "../../use-cases/utils/jd-const";
import AdminGateway from "use-cases/admin/admin.gateway";
import { Request, Response } from "express";
import AdminPresenter from "./admin.presenter";
import HTTPCreateVendorBody from "use-cases/vendor/vendor.dtos";
import HTTPRequest from "adapters/common/models/http-request";

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
  onUpdateVendor(req: Request, res: Response) {
    const data = this._interactor.createVendor("interantio");
    return res.send({ message: "update Vendor" });
  }
  onGetVendorById() {
    return `this is on get vendor by id`;
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
    const vendorData: IVendorInput = <HTTPCreateVendorBody>req.body;
    const request:HTTPRequest<void, void,HTTPCreateVendorBody,void> = {
      body:vendorData
    }
    const data = await this._interactor.createVendor(request.body);
    return this.presenter.showSucces(data, res)
  }
}
