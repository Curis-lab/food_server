import { inject, injectable } from "inversify";
import { IAdminInteractor } from "../common/interfaces/admin";
import { admin_types } from "../../use-cases/utils/jd-const";

@injectable()
export class AdminController {
  private _interactor: IAdminInteractor;
  constructor(
    @inject(admin_types.admininteractor)  adminInteractor: IAdminInteractor
  )
  {
    this._interactor = adminInteractor;
  }
  onUpdateVendor() {
    const data = this._interactor.createVendor("interantio");
    return `this is on update vendor`;
  }
  onGetVendorById() {
    return `this is on get vendor by id`;
  }
  onGetVendors() {
    return `this is on get vendor`;
  }
  onDeleteVendorById() {
    return `this is on delete vendor by id`;
  }
  onCreateVendor() {
    return `this is on create vendor`
  }
}
