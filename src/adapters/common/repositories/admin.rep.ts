import { injectable } from "inversify";
import { IAdminRepository } from "../interfaces/admin";
import { Vendor } from "../models/vendor";
// import { Vandor, VandorDoc } from "../../../../models";
import { IVendorInput } from "../../../../dto";
import { Vendor as vendor, VendorDoc } from "../../../infrastructure/db/mongo/models/vendor";

@injectable()
export class AdminRepository implements IAdminRepository {
  private _repos: any;
  constructor() {
    this._repos = vendor;
  }
  async createVendor(data: IVendorInput): Promise<VendorDoc> {
    const vendor = await this._repos.create(data);
    return Promise.resolve(vendor);
  }
  async deleteVendor(id: string): Promise<boolean> {
    const deleteVendor = await this._repos.deleteOne({ _id: id });
    return Promise.resolve(deleteVendor.deletedCount === 1);
  }
  async updateVendor(id: string, data: any): Promise<Vendor> {
    const result = await this._repos.findByIdAndUpdate(
      { _id: id },
      { name: data },
      { new: true }
    );
    return Promise.resolve(result);
  }
  async findById(id: string): Promise<Vendor> {
    const result = await this._repos.findById({ _id: id });
    return Promise.resolve(result);
  }
  async find(): Promise<Vendor[]> {
    return await this._repos.find();
  }
}
