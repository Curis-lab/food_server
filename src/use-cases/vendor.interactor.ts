import { inject, injectable } from "inversify";
import { IVendorInteractor, IVendorRepository } from "../adapters/common/interfaces/vendor";
import { Food } from "../adapters/common/models/food";
import { Vendor } from "../adapters/common/models/vendor";
import { INTERFACE_TYPE } from "../infrastructure/container";

@injectable()
export class VendorInteractor implements IVendorInteractor {
  private _vendorRepository: IVendorRepository;
  constructor(
    @inject(INTERFACE_TYPE.VendorRepository) vendorRepository:IVendorRepository) {
    this._vendorRepository = vendorRepository;
  }
  async getVendorProfileByEmail(email: string): Promise<Vendor> {
    const data = await this._vendorRepository.findByEmail(email);
    return Promise.resolve(data);
  }
  async getVendorProfileById(id:string): Promise<Vendor> {
    const data = await this._vendorRepository.findById(id);
    return Promise.resolve(data);
  }
  updateVendorProfile(data: any): Promise<Vendor> {
    throw new Error("Method not implemented.");
  }
  async addFood(input: any): Promise<Food> {
    // const data = await this._foodRepository.create(input);
    throw new Error("Method not implemented.");
    // return Promise.resolve(data);
  }
  getFoods(): Promise<Food[]> {
    throw new Error("Method not implemented.");
  }
}
