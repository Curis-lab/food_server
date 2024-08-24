import { inject, injectable } from "inversify";
import { VendorController } from "../../adapters/vendor/vendor.controller";

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
    const register: Record<string, (...args: any[]) => any> = {
      profile: (id: string) => this.vendorController.GetVendorProfile(id),
      login: (data: { email: string; password: string }) =>
        this.vendorController.VendorLogin(data),
      addfood:()=>this.vendorController.AddFood()
    };

    return register[funcName]
      ? register[funcName](...args)
      : { message: "funtion not found" };
  }
}
