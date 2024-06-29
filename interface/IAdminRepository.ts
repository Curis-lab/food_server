import { IVendorInput } from "../dto";
import { Admin } from "../entities/Admin";
import { VandorDoc } from "../models";
import { AdminDoc } from "../models/Admin";


export interface IAdminRepository {
  createVandor(input:IVendorInput): Promise<VandorDoc>;
  findVandor(id: string): Promise<VandorDoc|null>;
  vandors():Promise<any[]>;
  deleteVandor(id:string):Promise<boolean>;
  updateVandor(id:string, data:string):Promise<VandorDoc|null>;
}

