import { CreateVandorInput } from "../dto";
import { IAdminInteractor } from "../interface/IAdminInteractor";
import { IAdminRepository } from "../interface/IAdminRepository";
import { Vandor, VandorDoc } from "../models";
import { AdminRepository } from "../repositories/adminRepository";


//I don't know what interactor responsility for this class

export type ICreateVandor = {name:string, ownerName:string, foodType:[string], pinCode:string, address:string; phone:string; email:string; password:string;}
export class AdminInteractor implements IAdminInteractor{
    private adminRepository:IAdminRepository;
    constructor(){
        this.adminRepository = new AdminRepository();;
    }
    vandorById(id: string): Promise<VandorDoc | null> {
        throw new Error("Method not implemented.");
    }
    allVandors(): Promise<VandorDoc[]> {
        throw new Error("Method not implemented.");
    }
    createVandor(input: ICreateVandor): Promise<VandorDoc> {
        throw new Error("Method not implemented.");
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