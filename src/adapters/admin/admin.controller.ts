import { inject, injectable } from "inversify";
import { IVendorInput } from "../../../dto";
import { admin_types } from "../../use-cases/utils/jd-const";
import AdminGateway from "use-cases/admin/admin.gateway";
import { Request, Response } from "express";
import AdminPresenter from "./admin.presenter";

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
    
    const dataformat = {
      status: "success",
      data: data,
      message: "Vendor retrived successfully",
    };
    return this.presenter.showSucces(data,res);
  }
  async onDeleteVendorById(req: Request, res: Response) {
    const id = req.params.id;
    const msg = await this._interactor.rejectVendor(id);
    const formatted = {
      status: "success",
      body: msg,
      message: msg,
    };
    return res.send(formatted);
  }
  async onCreateVendor(req: Request, res: Response) {
    const vendorData: IVendorInput = <IVendorInput>req.body;
    const data = await this._interactor.createVendor(vendorData);
    const formatted = {
      status: "success",
      data,
      message: "successfuly created",
    };
    return res.send(formatted);
  }
}
