import { inject, injectable } from "inversify";
import { IAdminRepository } from "../../adapters/common/interfaces/admin";
import { Vendor } from "../../adapters/common/models/vendor";
import { admin_types } from "../utils/jd-const";
import { IVendorInput } from "../../../dto";
import {  VandorDoc } from "../../../models";
import AdminGateway from "./admin.gateway";
import FoodProps from "entities/product";

@injectable()
export class AdminInteractor implements AdminGateway {
  private _repos: IAdminRepository;
  constructor(@inject(admin_types.adminrespository) repos: IAdminRepository) {
    this._repos = repos;
  }
  async createVendor(data: IVendorInput): Promise<VandorDoc> {
    const vendor = await this._repos.createVendor(data);
    return Promise.resolve(vendor);
  }
  async viewVendors(): Promise<Vendor[]> {
    const data = await this._repos.find();
    return Promise.resolve(data);
  }
  async rejectVendor(id: string): Promise<void> {}
  async viewAllProducts(): Promise<FoodProps[]> {
    const data = await this._repos.find();
    throw new Error("view all products");
  }
}
