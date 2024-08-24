import { inject, injectable } from "inversify";
import { VendorController } from "@adapters/vendor/vendor.controller";

const INTERFACE_TYPE = {
  VendorRepository: Symbol.for("VendorRepository"),
  VendorInteractor: Symbol.for("VendorInteractor"),
  VendorController: Symbol.for("VendorController"),
  VendorPresenter: Symbol.for("VendorPresenter"),
};
@injectable()
export class VendorCollection {
  constructor(
    @inject(INTERFACE_TYPE.VendorController)
    private vendorController: VendorController
  ) {}
  callFunctionByName(funcName: string, ...args: any) {
    const register: Record<string, (...args: any) => any> = {
      profile: (req) => this.vendorController.GetVendorProfile(req),
      login: (req) => this.vendorController.VendorLogin(req),
      addfood: (req) => this.vendorController.AddFood(req),
    };

    return register[funcName]
      ? register[funcName](...args)
      : { message: "funtion not found" };
  }
}
