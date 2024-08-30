import { Vendor } from "../../entities";
import FoodProps from "entities/product";
import AdminGateway from "./admin.gateway";
import { inject, injectable } from "inversify";
import { admin_types } from "../utils/jd-const";
import { VendorDoc } from "infrastructure/db/mongo/models/vendor";
import {
  IAdminRepository,
} from "../../adapters/common/interfaces/admin";
import {
  GeneratePassword,
  generateSalt,
} from "../../use-cases/utils/password-utls";
import {CreateVendorInput, vendorTDO } from "./admin.dtos";

@injectable()
export class AdminInteractor implements AdminGateway {
  private _repos: IAdminRepository;
  constructor(@inject(admin_types.adminrespository) repos: IAdminRepository) {
    this._repos = repos;
  }

  async createVendor(data: CreateVendorInput): Promise<vendorTDO | string> {
    const { email, password } = data;
    const existing_vendor = await this._repos.findByEmail(email);
    if (!existing_vendor) {
      return Promise.resolve("already created with this email");
    }
    const salt = await generateSalt();
    const hashed_password = await GeneratePassword(password, salt);

    const vendor_raw = {
      ...data,
      salt,
      password: hashed_password,
    }
    const create_vendor = Vendor.build(vendor_raw);
    console.log('create vendor on interactor',create_vendor);
    const vendor = await this._repos.createVendor(vendor_raw as vendorTDO);

    return Promise.resolve(vendor);
  }

  async viewVendors(): Promise<Vendor[]> {
    const data = await this._repos.find();

    if (!data) {
      throw new Error("view Vendors error on admin.interactor");
    }

    const vendors: any[] = data.map(
      ({
        name,
        ownerName,
        pinCode,
        address,
        phone,
        email,
        password,
        salt,
        serviceAvailable,
        coverImage,
        rating,
        foodType,
        foods,
      }) => ({
        name,
        ownerName,
        pinCode,
        address,
        phone,
        email,
        password,
        salt,
        serviceAvailable,
        coverImage,
        rating,
        foodType,
        foods,
      })
    );
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
  async updateVendor(id: string, data: any): Promise<Vendor> {
    const vendor = await this._repos.patchVendor(id, data);
    console.log("admin.interactor", vendor);
    return Promise.resolve(vendor);
  }
  async searchVendorById(id: string): Promise<Vendor> {
    const vendor = await this._repos.findById(id);
    return Promise.resolve(vendor);
  }
}
