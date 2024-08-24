import { inject, injectable } from "inversify";
import { IAdminInteractor } from "../common/interfaces/admin";
import { IVendorInput } from "../../../dto";
// import { admin_types } from "@useCases/utils/jd-const";
import { admin_types } from "../../use-cases/utils/jd-const";

@injectable()
export class AdminController {
  private _interactor: IAdminInteractor;
  constructor(
    @inject(admin_types.admininteractor) adminInteractor: IAdminInteractor
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
  async onGetVendors() {
    return await this._interactor.getVendors();
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
