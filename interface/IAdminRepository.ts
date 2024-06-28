import { Admin } from "../entities/Admin";
import { VandorDoc } from "../models";
import { AdminDoc } from "../models/Admin";


export interface IAdminRepository {
  createVandor(input:Admin): Promise<VandorDoc>;
  updateVandor(id: number): Promise<VandorDoc>;
  findVandor(id: number): Promise<VandorDoc>;
}

