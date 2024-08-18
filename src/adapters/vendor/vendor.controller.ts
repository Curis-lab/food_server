import { NextFunction, Request, Response } from "express";
import { IVendorInteractor } from "../common/interfaces/vendor";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../../infrastructure/container";
import { GenerateSignature, validatePassword } from "../../../utility";

@injectable()
export class VendorController {
  private _interactor: IVendorInteractor;
  private _presenter: any;
  constructor(
    @inject(INTERFACE_TYPE.VendorInteractor) interactor: IVendorInteractor,
    @inject(INTERFACE_TYPE.VendorPresenter) presenter: any
  ) {
    this._interactor = interactor;
    this._presenter = presenter;
  }
  async VendorLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password } = <{ email: string; password: string }>req.body;

    if (!email || !password) {
      throw new Error("unperfect format");
    }
    const existingVendor = await this._interactor.getVendorProfileByEmail(
      email
    );
    if (existingVendor !== null) {
      const validation = await validatePassword(
        password,
        existingVendor.password,
        existingVendor.salt
      );
      if (validation) {
        const signature = GenerateSignature({
          // _id: "664e1a9e",
          _id: "664e1a9e95c155f4e387c1e5",
          email: existingVendor.email,
          name: existingVendor.name,
        });
        //signature = string;
        return this._presenter.showSuccess(signature, res);
      } else {
        return this._presenter.showError("Password not validate", res);
      }
    }
    return this._presenter.showError("credential is not validate", res);
  }

  async GetVendorProfile(req: Request, res: Response, next: NextFunction) {
    const data = await this._interactor.getVendorProfileById(
      "664e1a9e95c155f4e387c1e5"
    );
    //format data to product
    //name, ownerName, address, phone, email, serviceAvailable
    const profile = {
      name: data.name,
      ownerName: data.ownerName,
      address: data.address,
      phone: data.phone,
      email: data.email,
      serviceAvaliable: data.serviceAvailable,
    };
    if (data) {
      return this._presenter.showSuccess(profile, res);
    } else {
      return this._presenter.showError("did not found", res);
    }
  }

  async UpdateVendorProfile(req: Request, res: Response, next: NextFunction) {
    return res.send({ message: "update profile" });
  }
  async AddFood(req: Request, res: Response, next: NextFunction) {
    return res.send({ message: "add food" });
  }
  // async UpdateVendorCover(req: Request, res: Response, next: NextFunction){
  //   const user = req.user;
  //   if(user){
  //     const vendor = await this._interactor.getVendorProfileById(user._id);
  //     if(vendor !== null){
  //       const file = req.files as [Express.Multer.File];
  //       vendor.coverImages.push(file.filename);
  //       const result = await vendor.save();
  //       return res.json(result);
  //     }
  //   }
  //   return res.json({message: "Something went wrong"});
  // }
}
