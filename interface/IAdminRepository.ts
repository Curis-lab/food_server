import { Admin } from "../entities/Admin";

export interface IAdminRepository {
  create(input: Admin): Promise<Admin>;
  update(id: number): Promise<Admin>;
  find(id: number): Promise<Admin>;
}
