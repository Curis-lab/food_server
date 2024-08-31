import { injectable } from "inversify";
import { IAdminRepository } from "../interfaces/admin";
import { vendorTDO } from "use-cases/admin/admin.dtos";
import { Vendor as vendor, VendorDoc } from "../../../infrastructure/db/mongo/models/vendor";
import { Vendor } from "@entities";

@injectable()
export class AdminRepository implements IAdminRepository {
  private _repos: any;
  constructor() {
    this._repos = vendor;
  }
  async createVendor(data:  vendorTDO): Promise<vendorTDO> {
    const vendor = await this._repos.create(data);
    return Promise.resolve(vendor as vendorTDO);
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
    const result = await this._repos.findById(id);
    return Promise.resolve(result);
  }
  async patchVendor(id:string, updates:any):Promise<Vendor>{
    const result = await this._repos.updateOne(
      { _id: id },  // Filter by ID
      { $set: updates }           // Apply updates (only specific fields)
    );
    return result;
  }
  async find(): Promise<any[]> {
    return await this._repos.find();
  }
  async findByEmail(email: string): Promise<Vendor> {
    return await this._repos.find({email});
  }
}
