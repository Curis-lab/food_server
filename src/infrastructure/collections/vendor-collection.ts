import { inject, injectable } from "inversify";
import { VendorController } from "adapters/vendor/vendor.controller";

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
  ) {
    this.vendorController = vendorController;
  }
  callFunctionByName(funcName: string, ...args: any) {
    const register: Record<string, (...args: any) => any> = {
      profile: (req, res) => this.vendorController.GetVendorProfile(req, res),
      login: (req, res) => this.vendorController.VendorLogin(req, res),
      addfood: (req, res) => this.vendorController.addFood(req, res),
      foods:(req, res)=>this.vendorController.getFoods(req, res),
      deleteFood: (req, res)=> this.vendorController.deleteFood(req, res)
    };

    return register[funcName]
      ? register[funcName](...args)
      : { message: "funtion not found" };
  }
}
