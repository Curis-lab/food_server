import { NextFunction, Request, Response } from "express";
import { IVendorInteractor } from "../common/interfaces/vendor";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../../infrastructure/container";
import { GenerateSignature, validatePassword } from "../../../utility";
import ExpressResponseHandler from "../../infrastructure/express-response-handler";


@injectable()
export class VendorController {
  private _interactor: IVendorInteractor;
  constructor(
    @inject(INTERFACE_TYPE.VendorInteractor) interactor: IVendorInteractor
  ) {
    this._interactor = interactor;
  }
  //vendorloginController
  async VendorLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password } = <{ email: string; password: string }>req.body;
    const presenter = new ExpressResponseHandler<any>(res);
    //data validation
    if(!email || !password){
      throw new Error('unperfect format');
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
          _id: "664e1a9e95c155f4e387c1e5",
          email: existingVendor.email,
          name: existingVendor.name,
        });
        const view = {
          statusCode: 200,
          body: {
            data: signature 
          }
        };
        return presenter.send(view);
      } else {
        return res.json({ message: "Password not validate" });
      }
    }
    res.send({ msg: "credential is not correct" });
  }

  async GetVendorProfile(req: Request, res: Response, next: NextFunction) {
    const data = await this._interactor.getVendorProfileById(
      "664e1a9e95c155f4e387c1e5"
    );

    return res.send(data);
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
