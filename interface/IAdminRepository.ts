import { Admin } from "../entities/Admin";
import { VandorDoc } from "../models";
import { AdminDoc } from "../models/Admin";

//precise on returning data;

export interface IAdminRepository {
  create(input: Admin): Promise<AdminDoc>;
  update(id: number): Promise<AdminDoc>;
  find(id: number): Promise<Admin>;
}

export interface IVandorRepository {
  create(): Promise<VandorDoc>;
  update(id: number): Promise<VandorDoc>;
}
