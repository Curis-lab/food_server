import { IVendorInput } from "../dto";
import { IAdminInteractor } from "../interface/IAdminInteractor";
import { IAdminRepository } from "../interface/IAdminRepository";
import { Vandor, VandorDoc } from "../models";



export type ICreateVandor = {name:string, ownerName:string, foodType:[string], pinCode:string, address:string; phone:string; email:string; password:string;}

export class AdminInteractor implements IAdminInteractor{
    private repository:IAdminRepository;
    constructor(repository: IAdminRepository){
        this.repository = repository;
    }
    vandorById(id: string): Promise<VandorDoc | null> {
        throw new Error("Method not implemented.");
    }
    async allVandors(): Promise<VandorDoc[]> {
        const vandors = await this.repository.Vandors();
        if(vandors){
            vandors.sort((a,b)=>{
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            })
            return vandors;
        }else{
            return []
        }
    }
    async createVandor(input: IVendorInput): Promise<VandorDoc> {
        const vendor =  await this.repository.createVandor(input)
        if(vendor){
            return vendor;
        } else{
            throw new Error("Error while creating vandor");
        }
    }
    login({ email, password }: { email: string; password: string; }): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getProfile(): Promise<VandorDoc | null> {
        throw new Error("Method not implemented.");
    }
    findVandor(id: string | undefined, email?: string): Promise<VandorDoc | null> {
        throw new Error("Method not implemented.");
    }
}