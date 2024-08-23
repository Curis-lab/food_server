import { inject, injectable } from "inversify";
import { AdminRepository } from "../adapters/common/repositories/admin.rep";
import { IVendorInput } from "../../dto";
import { VandorDoc } from "../../models";
import { IAdminInteractor, IAdminRepository } from "../adapters/common/interfaces/admin";
import { Vendor } from "../adapters/common/models/vendor";
import { admin_types } from "./utils/jd-const";

@injectable()
export class AdminInteractor implements IAdminInteractor{
  _repos:IAdminRepository;
  constructor(
     @inject(admin_types.adminrespository) repos: IAdminRepository
  ){
    this._repos = repos;
  }
  async createVendor(id: string): Promise<Vendor> {
    const data = await this._repos.create(id)
    return Promise.resolve(data);
  }
  getVendors(): Promise<Vendor[]> {
    throw new Error("Method not implemented.");
  }
}