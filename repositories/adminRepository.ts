import { Admin } from "../entities/Admin";
import { IAdminRepository } from "../interface/IAdminRepository";
import { AdminDoc } from "../models/Admin";

//make only one connection

export class AdminRepository implements IAdminRepository{
    private client;
    constructor(client: any){
        this.client = client;
    }

    /*------------create vandor------------*/
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