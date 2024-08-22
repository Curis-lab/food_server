import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../../container";
import { VendorController } from "../../../adapters/vendor/vendor.controller";

@injectable()
export class VendorCollection {
  constructor(
    @inject(INTERFACE_TYPE.VendorController)
    private vendorController: VendorController
  ) {}
  callFunctionByName(funcName: string, ...args: any) {
    const register: Record<string, (...args: any[]) => any> = {
      profile: (id: string) => this.vendorController.GetVendorProfile(id),
      login: (data: {email:string, password:string}) => this.vendorController.VendorLogin(data),
    };

    return register[funcName]
      ? register[funcName](...args)
      : {message:"funtion not found"};
  }
}
