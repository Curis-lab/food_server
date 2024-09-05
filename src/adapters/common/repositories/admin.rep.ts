import { injectable } from "inversify";
import { IAdminRepository } from "../interfaces/admin";
import { vendorTDO } from "use-cases/admin/admin.dtos";
import { Vendor as vendor } from "@infrastructure/db/mongo/models/vendor";
import { Vendor } from "@entities";
import VendorDataMapper from "@infrastructure/db/data-mapper/vendor-data-mapper";

@injectable()
export class AdminRepository implements IAdminRepository {
  private _vendor: any;
  constructor() {
    this._vendor = new VendorDataMapper(vendor);
  }
  async createVendor(data: vendorTDO): Promise<vendorTDO> {
    const vendor = await this._vendor.insert(data);
    return Promise.resolve(vendor as vendorTDO);
  }
  async deleteVendor(id: string): Promise<boolean> {
    const deleted: boolean = await this._vendor.deleteOne(id);
    return Promise.resolve(deleted);
  }
  async updateVendor(id: string, data: any): Promise<Vendor> {
    const result = await this._vendor.updateById(id, data);
    return Promise.resolve(result);
  }
  async findById(id: string): Promise<Vendor> {
    const result = await this._vendor.findById(id);
    return Promise.resolve(result);
  }
  async patchVendor(id: string, updates: any): Promise<Vendor> {
    const result = await this._vendor.updateById(id, updates);
    return result;
  }
  async find(): Promise<any[]> {
    return await this._vendor.find();
  }
  async findByEmail(email: string): Promise<Vendor> {
    return await this._vendor.findByEmail(email);
  }
}
export function MixVendorRepository(baseClass: any) {
  return class extends baseClass {
    private _vendor: any = new VendorDataMapper(vendor);
    // constructor() {
    //   this._vendor = new VendorDataMapper(vendor);
    // }
    async createVendor(data: vendorTDO): Promise<vendorTDO> {
      const vendor = await this._vendor.insert(data);
      return Promise.resolve(vendor as vendorTDO);
    }
    async deleteVendor(id: string): Promise<boolean> {
      const deleted: boolean = await this._vendor.deleteOne(id);
      return Promise.resolve(deleted);
    }
    async updateVendor(id: string, data: any): Promise<Vendor> {
      const result = await this._vendor.updateById(id, data);
      return Promise.resolve(result);
    }
    async findById(id: string): Promise<Vendor> {
      const result = await this._vendor.findById(id);
      return Promise.resolve(result);
    }
    async patchVendor(id: string, updates: any): Promise<Vendor> {
      const result = await this._vendor.updateById(id, updates);
      return result;
    }
    async find(): Promise<any[]> {
      return await this._vendor.find();
    }
    async findByEmail(email: string): Promise<Vendor> {
      return await this._vendor.findByEmail(email);
    }
  };
}
