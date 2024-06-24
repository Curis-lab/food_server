import { Admin } from "../entities/Admin";
import { IAdminRepository } from "../interface/IAdminRepository";
import { AdminDoc } from "../models/Admin";

export class AdminRepository implements IAdminRepository{
    create(input: Admin): Promise<AdminDoc> {
        throw new Error("Method not implemented.");
    }
    update(id: number): Promise<AdminDoc> {
        throw new Error("Method not implemented.");
    }
    find(id: number): Promise<Admin> {
        throw new Error("Method not implemented.");
    }
    
   
}