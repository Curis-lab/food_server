import { inject, injectable } from "inversify";
import { IVendorRepository } from "../../adapters/common/interfaces/vendor";
// import { Food } from "../../adapters/common/models/food";
// import { Vendor } from "../../adapters/common/models/vendor";
import { VENDOR_TYPES } from "../../adapters/vendor/vendor.controller";
import { VendorGateway } from "./vendor.gateway";
import { Food, Vendor } from "@entities";

@injectable()
export class VendorInteractor implements VendorGateway {
  private _vendorRepository: IVendorRepository;
  constructor(
    @inject(VENDOR_TYPES.VendorRepository) vendorRepository: IVendorRepository
  ) {
    this._vendorRepository = vendorRepository;
  }
  async getVendorProfileByEmail(email: string): Promise<Vendor> {
    const data = await this._vendorRepository.findByEmail(email);
    return Promise.resolve(data);
  }
  async getVendorProfileById(id: string): Promise<Vendor> {
    const data = await this._vendorRepository.findById(id);
    return Promise.resolve(data);
  }
  updateVendorProfile(data: any): Promise<Vendor> {
    throw new Error("Method not implemented.");
  }
  async addFood(input: any): Promise<Food> {
    const data = await this._vendorRepository.createFood(input);
    return data;
  }
  getFoods(): Promise<Food[]> {
    throw new Error("Method not implemented.");
  }
}
