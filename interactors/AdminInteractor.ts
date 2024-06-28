import { IVendorInput } from "../dto";
import { IAdminInteractor } from "../interface/IAdminInteractor";
import { IAdminRepository } from "../interface/IAdminRepository";
import { Vandor, VandorDoc } from "../models";


export class AdminInteractor implements IAdminInteractor{
    private repository:IAdminRepository;

    constructor(repository: IAdminRepository){
        this.repository = repository;
    }

    async vandorById(id: string): Promise<VandorDoc | null> {
        const vandors = await this.repository.findVandor(id);
        return vandors;
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
    async deleteVandor(id:string):Promise<boolean>{
        const deleted = await this.repository.deleteVandor(id);
        if(deleted){
            return true;
        }else{
            return false;
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