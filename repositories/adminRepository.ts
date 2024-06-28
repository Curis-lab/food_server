import { IVendorInput } from "../dto";
import { IAdminRepository } from "../interface/IAdminRepository";
import { Vandor, VandorDoc } from "../models";

export class AdminRepository implements IAdminRepository {
    private vandor;
    constructor(){
        this.vandor = Vandor;
    }

    async Vandors():Promise<any[]>{
        return await this.vandor.find();
    }
    async createVandor(input: IVendorInput): Promise<VandorDoc> {
        return await this.vandor.create(input);
    }
    updateVandor(id: number): Promise<VandorDoc> {
        throw new Error("Method not implemented.");
    }
    findVandor(id: number): Promise<VandorDoc> {
        throw new Error("Method not implemented.");
    }
}