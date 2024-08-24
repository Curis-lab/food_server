import { inject, injectable } from "inversify";
import { NextFunction, Request, Response } from "express";
import { VendorGateway } from "use-cases/vendor/vendor.gateway";

export const VENDOR_TYPES = {
  VendorRepository: Symbol.for("VendorRepository"),
  VendorInteractor: Symbol.for("VendorInteractor"),
  VendorController: Symbol.for("VendorController"),
  VendorPresenter: Symbol.for("VendorPresenter"),
};

@injectable()
export class VendorController {
  private _interactor: VendorGateway;
  private _presenter: any;
  constructor(
    @inject(VENDOR_TYPES.VendorInteractor) interactor: VendorGateway,
    @inject(VENDOR_TYPES.VendorPresenter) presenter: any
  ) {
    this._interactor = interactor;
    this._presenter = presenter;
  }
  async VendorLogin(req: Request) {
    type Tauth = {email:string, password:string};
    const { email, password } = <Tauth>req.body;
    return "creadential is not valid";
  }

  async GetVendorProfile(req: Request) {
    const data = await this._interactor.getVendorProfileById(
      "66c45ff6b7e8a571a43fe07b"
    );
    return "this is get vendor profile";
  }

  async UpdateVendorProfile(req: Request, res: Response, next: NextFunction) {
    return res.send({ message: "update profile" });
  }
  async AddFood(req: Request) {
    type CreateFoodInputs = {
      name: string;
      description: string;
      category: string;
      foodType: string;
      readyTime: number;
      price: number;
    };
    const food = <CreateFoodInputs>req.body;
    const data = await this._interactor.addFood(food);
    return data;
  }
}
