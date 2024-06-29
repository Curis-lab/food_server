import { IVendorInput } from "../dto";
import { IAdminRepository } from "../interface/IAdminRepository";
import { Vandor, VandorDoc } from "../models";

export class AdminRepository implements IAdminRepository {
    private database;
    constructor(){
        this.database = Vandor;
    }
    async deleteVandor(id:string):Promise<boolean>{
        const result =  await this.database.deleteOne({_id:id});   
        return result.deletedCount === 1;
    }
    async vandors():Promise<any[]>{
        return await this.database.find();
    }
    async createVandor(input: IVendorInput): Promise<VandorDoc> {
        return await this.database.create(input);
    }
    async findVandor(id: string): Promise<VandorDoc|null> {
        return await this.database.findById({_id:id});
    }
    async updateVandor(id:string, data:string):Promise<VandorDoc|null>{
        const result =  await this.database.findByIdAndUpdate({_id:id},{name:data},{new: true});
        return result;
    }
}