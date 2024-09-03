import { injectable } from "inversify";
import { IAdminRepository } from "../interfaces/admin";
import { vendorTDO } from "use-cases/admin/admin.dtos";
import { Vendor as vendor} from "@infrastructure/db/mongo/models/vendor";
import { Vendor } from "@entities";
import { Customer as customer } from "@infrastructure/db/mongo/models/customer";

@injectable()
export class AdminRepository implements IAdminRepository {
  private _vendor: any;
  private _customer:any;

  constructor() {
    this._vendor = vendor;
    this._customer = customer;
  }
  async createVendor(data:  vendorTDO): Promise<vendorTDO> {
    const vendor = await this._vendor.create(data);
    return Promise.resolve(vendor as vendorTDO);
  }
  async deleteVendor(id: string): Promise<boolean> {
    const deleteVendor = await this._vendor.deleteOne({ _id: id });
    return Promise.resolve(deleteVendor.deletedCount === 1);
  }
  async updateVendor(id: string, data: any): Promise<Vendor> {
    const result = await this._vendor.findByIdAndUpdate(
      { _id: id },
      { name: data },
      { new: true }
    );
    return Promise.resolve(result);
  }
  async findById(id: string): Promise<Vendor> {
    const result = await this._vendor.findById(id);
    return Promise.resolve(result);
  }
  async patchVendor(id:string, updates:any):Promise<Vendor>{
    const result = await this._vendor.updateOne(
      { _id: id }, 
      { $set: updates }           // Apply updates (only specific fields)
    );
    return result;
  }
  async find(): Promise<any[]> {
    return await this._vendor.find();
  }
  async findByEmail(email: string): Promise<Vendor> {
    return await this._vendor.find({email});
  }
  //-----------------start: customer management------------------------
  async getAllCustomers():Promise<any>{
    const customer = await this._customer.find();
    return Promise.resolve(customer);
  }
  //-----------------end: customer amangement ----------------------
}
