import { IVendorInteractor, IVendorRepository } from "../adapters/common/interfaces/vendor";
import { Food } from "../adapters/common/models/food";
import { Vendor } from "../adapters/common/models/vendor";

export class VendorInteractor implements IVendorInteractor {
  private _vendorRepository: IVendorRepository;
  private _foodRepository: any;
  constructor(vendorRepository:IVendorRepository, foodRepository: any) {
    this._vendorRepository = vendorRepository;
    this._foodRepository = foodRepository;
  }
  async getVendorProfile(id:string): Promise<Vendor> {
    const data = await this._vendorRepository.findOne(id);
    return Promise.resolve(data);
  }
  updateVendorProfile(data: any): Promise<Vendor> {
    throw new Error("Method not implemented.");
  }
  addFood(data: any): Promise<Food> {
    throw new Error("Method not implemented.");
  }
  getFoods(): Promise<Food[]> {
    throw new Error("Method not implemented.");
  }
}
