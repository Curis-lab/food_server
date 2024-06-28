import { Admin } from "../entities/Admin";
import { IAdminRepository } from "../interface/IAdminRepository";
import { Vandor, VandorDoc } from "../models";
import { AdminDoc } from "../models/Admin";

export class AdminRepository implements IAdminRepository {
    private vandor;

    constructor(){
        this.vandor = Vandor;
    }
    async createVandor(input: any): Promise<VandorDoc> {
        return this.vandor.create(input);
    }
    updateVandor(id: number): Promise<VandorDoc> {
        throw new Error("Method not implemented.");
    }
    findVandor(id: number): Promise<VandorDoc> {
        throw new Error("Method not implemented.");
    }
}