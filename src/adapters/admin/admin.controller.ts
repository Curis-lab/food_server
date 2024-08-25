import { inject, injectable } from "inversify";
import { IAdminInteractor } from "../common/interfaces/admin";
import { IVendorInput } from "../../../dto";
import { admin_types } from "../../use-cases/utils/jd-const";
import AdminGateway from "use-cases/admin/admin.gateway";
import { Request, Response } from "express";
import { Vendor } from "@entities";

@injectable()
export class AdminController {
  private _interactor: AdminGateway;
  constructor(
    @inject(admin_types.admininteractor) adminInteractor: AdminGateway
  ) {
    this._interactor = adminInteractor;
  }
  onUpdateVendor() {
    const data = this._interactor.createVendor("interantio");
    return `this is on update vendor`;
  }
  onGetVendorById() {
    return `this is on get vendor by id`;
  }
  async onGetVendors(req: Request, res:Response) {
    const data = await this._interactor.viewVendors();
    
    const dataformat = {
      status:'success',
      data:data,
      message:'Vendor retrived successfully'
    }
    return res.send(dataformat);
  }
  onDeleteVendorById() {
    return `this is on delete vendor by id`;
  }
  async onCreateVendor(input:any) {    
    const vendorData:IVendorInput = {
      name:'tuntun',
      ownerName:'file',
      foodType:['fiowiel'],
      pinCode:'iowie',
      address:'iwoei',
      phone:'oi',
      email:'slfjaslf',
      password: 'fiow',
      salt:'ioweif',
      serviceAvailable: false,
      coverImage: [""],
      rating: 2,
    }
    return await this._interactor.createVendor(vendorData);
  }
}
