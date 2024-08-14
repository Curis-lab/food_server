import { VendorRepository } from "../adapters/common/repositories/vendor.rep";
import { VendorController } from "../adapters/vendor/vendor.controller";
import { VendorInteractor } from "../use-cases/vendor.interactor";

export const INTERFACE_TYPE = {
  VendorRepository: Symbol.for("VendorRepository"),
  VendorInteractor: Symbol.for("VendorInteractor"),
  VendorController: Symbol.for("VendorController"),
};
