import { IVendorInput } from "../dto";
import { Admin } from "../entities/Admin";
import { VandorDoc } from "../models";
import { AdminDoc } from "../models/Admin";


export interface IAdminRepository {
  createVandor(input:IVendorInput): Promise<VandorDoc>;
  updateVandor(id: number): Promise<VandorDoc>;
  findVandor(id: string): Promise<VandorDoc|null>;
  Vandors():Promise<any[]>;
  deleteVandor(id:string):Promise<boolean>
}

