import { Vendor } from "@entities";
import FoodProps from "entities/product";
import AdminGateway from "./admin.gateway";
import { IVendorInput } from "../../../dto";
import { inject, injectable } from "inversify";
import { admin_types } from "../utils/jd-const";
import { VendorDoc } from "infrastructure/db/mongo/models/vendor";
import { IAdminRepository } from "../../adapters/common/interfaces/admin";

@injectable()
export class AdminInteractor implements AdminGateway {
  private _repos: IAdminRepository;
  constructor(@inject(admin_types.adminrespository) repos: IAdminRepository) {
    this._repos = repos;
  }
  async createVendor(data: IVendorInput): Promise<VendorDoc> {
    const vendor = await this._repos.createVendor(data);
    return Promise.resolve(vendor);
  }
  async viewVendors(): Promise<Vendor[]> {
    const data = await this._repos.find();
    if (!data) {
      throw new Error("view Vendors error on admin.interactor");
    }
    const vendors: Vendor[] = data.map((vendor) => {
      return {
        name: vendor.name,
        ownerName: vendor.ownerName,
        pinCode: vendor.pinCode,
        address: vendor.address,
        phone: vendor.phone,
        email: vendor.email,
        password: vendor.password,
        salt: vendor.salt,
        serviceAvailable: vendor.serviceAvailable,
        coverImage: vendor.coverImage,
        rating: vendor.rating,
        foodType: vendor.foodType,
        foods: vendor.foods,
      };
    });
    return Promise.resolve(vendors);
  }
  async rejectVendor(id: string): Promise<string> {
    const existing = await this._repos.findById(id);
    if (!existing) {
      return Promise.resolve("already deleted");
    }

    const vendor_deleted = await this._repos.deleteVendor(id);
    if (vendor_deleted) {
      return Promise.resolve("sussefully deleted");
    } else {
      return Promise.resolve("unsuccessfully deleted");
    }
  }
  async viewAllProducts(): Promise<FoodProps[]> {
    const data = await this._repos.find();
    throw new Error("view all products");
  }
}
