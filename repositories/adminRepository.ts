import { IVendorInput } from "../dto";
import { IAdminRepository } from "../interface/IAdminRepository";
import { Vandor, VandorDoc } from "../models";

export class AdminRepository implements IAdminRepository {
    private vandor;
    constructor(){
        this.vandor = Vandor;
    }
    async deleteVandor(id:string):Promise<boolean>{
        const result =  await this.vandor.deleteOne({_id:id});   
        return result.deletedCount === 1;
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
    async findVandor(id: string): Promise<VandorDoc|null> {
        return await this.vandor.findById({_id:id});
    }
}