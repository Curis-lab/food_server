import { inject, injectable } from "inversify";
import { NextFunction, Request, Response } from "express";
import { IVendorInteractor } from "../common/interfaces/vendor";
import { GenerateSignature, validatePassword } from "../../../utility";


export const VENDOR_TYPES = {
  VendorRepository: Symbol.for("VendorRepository"),
  VendorInteractor: Symbol.for("VendorInteractor"),
  VendorController: Symbol.for("VendorController"),
  VendorPresenter: Symbol.for("VendorPresenter"),
};
//req
@injectable()
export class VendorController {
  private _interactor: IVendorInteractor;
  private _presenter: any;
  constructor(
    @inject(VENDOR_TYPES.VendorInteractor) interactor: IVendorInteractor,
    @inject(VENDOR_TYPES.VendorPresenter) presenter: any
  ) {
    this._interactor = interactor;
    this._presenter = presenter;
  }
  async VendorLogin(data: {email:string, password:string}) {
    const {email, password} = data;
    return 'creadential is not valid'
  }

  async GetVendorProfile(id: string) {
    const data = await this._interactor.getVendorProfileById(
      "66c45ff6b7e8a571a43fe07b"
    );
    console.log("user profile");
    return "this is get vendor profile";
  }

  async UpdateVendorProfile(req: Request, res: Response, next: NextFunction) {
    return res.send({ message: "update profile" });
  }
  async AddFood() {
    return 'this is food adding part';
  }
}
