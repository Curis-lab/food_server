import { injectable } from "inversify";
import { IAdminRepository } from "../interfaces/admin";
import { Vendor } from "../models/vendor";
import { Vandor, VandorDoc } from "../../../../models";
import { IVendorInput } from "../../../../dto";

@injectable()
export class AdminRepository implements IAdminRepository{
  private _repos:any;
  constructor(){
    this._repos = Vandor;
  }
  async createVendor(data: IVendorInput): Promise<VandorDoc> {
    const vendor = await this._repos.create(data);
    return Promise.resolve(vendor);
  }
  delete(id: string): null {
    throw new Error("Method not implemented.");
  }
  update(id: string): Promise<Vendor> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<Vendor> {
    throw new Error("Method not implemented.");
  }
  async find():Promise<Vendor[]>{
    return await this._repos.find();
  }
}
