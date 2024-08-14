import { NextFunction, Request, Response } from "express";
import { IVendorInteractor } from "../common/interfaces/vendor";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../../infrastructure/container";

@injectable()
export class VendorController {
  private _interactor: IVendorInteractor;
  constructor(
    @inject(INTERFACE_TYPE.VendorInteractor) interactor: IVendorInteractor) {
    this._interactor = interactor;
  }
  async VendorLogin(req: Request, res: Response, next: NextFunction){
    res.send({message: 'file'});
  }
  async GetVendorProfile(req: Request, res: Response, next:NextFunction){
    const data = await this._interactor.getVendorProfileById('664e1a9e95c155f4e387c1e5');
    return res.send(data);
  }
  async UpdateVendorProfile(req: Request, res: Response, next: NextFunction){
    return res.send({message:"update profile"});
  }
}
