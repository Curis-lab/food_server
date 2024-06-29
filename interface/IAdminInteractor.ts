import { IVendorInput } from "../dto";
import { VandorDoc } from "../models";

export interface IAdminInteractor {
  vandorById(id: string): Promise<VandorDoc | null>;
  allVandors(): Promise<VandorDoc[]>;
  deleteVandor(id:string): Promise<boolean>;
  createVandor(input: IVendorInput): Promise<VandorDoc>;
  updateVandor(id:string, input:string):Promise<VandorDoc>;
}
