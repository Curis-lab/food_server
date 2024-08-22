import { inject, injectable } from "inversify";
import { Vandor } from "../../../models";
import { ADMIN_TYPES } from "../../infrastructure/containers/admin-container";
import { AdminInteractor } from "../../use-cases/admin.interactor";

@injectable()
export class AdminController {
  private _interactor:any;
  constructor(
    // @inject(ADMIN_TYPES.AdminInteractor) private adminInteractor:AdminInteractor
  ){
    this._interactor = '';
  }
  onUpdateVendor() {
    const data = this._interactor.findVandor()
    return `this is on update vendor`
  }
  onGetVendorById() {
    return `this is on get vendor by id`
  }
  onGetVendors() {
    return `this is on get vendor`
  }
  onDeleteVendorById() {
    return `this is on delete vendor by id`
  }
  onCreateVendor() {
    return `this is on create vendor`
  }
}

