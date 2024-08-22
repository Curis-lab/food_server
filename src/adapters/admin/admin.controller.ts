import "reflect-metadata";
import { inject, injectable } from "inversify";
import { Vandor } from "../../../models";
//only working with admin route;
export const ADMIN_TYPES = {
  FunctionRegistry: Symbol.for("FunctionRegistry"),
  AdminController: Symbol.for("AdminController"),
};

@injectable()
export class AdminController {
  private _repository:any;
  constructor(){
    this._repository = Vandor;
  }
  onUpdateVendor() {
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

