import { Admin } from "../entities/Admin";
import { IAdminRepository } from "../interface/IAdminRepository";

export class AdminRepository implements IAdminRepository{
    create(input: Admin): Promise<Admin> {
        throw new Error("Method not implemented.");
    }
    update(id: number): Promise<Admin> {
        throw new Error("Method not implemented.");
    }
    find(id: number): Promise<Admin> {
        throw new Error("Method not implemented.");
    }
    
}