import { IVendorInput } from "../dto";
import { ICreateVandor } from "../interactors/AdminInteractor";
import { VandorDoc } from "../models";

export interface IAdminInteractor {
  vandorById(id: string): Promise<VandorDoc | null>;
  allVandors(): Promise<VandorDoc[]>;
  createVandor(input: IVendorInput): Promise<VandorDoc>;
  login({ email, password }: { email: string; password: string }): Promise<boolean>;
  getProfile(): Promise<VandorDoc | null>;
  findVandor(id: string | undefined, email?: string): Promise<VandorDoc | null>;
}
