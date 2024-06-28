import { IAdminInteractor } from "../interface/IAdminInteractor";
import { IAdminRepository } from "../interface/IAdminRepository";
import { Vandor } from "../models";
import { AdminRepository } from "../repositories/adminRepository";

export class AdminInteractor implements IAdminInteractor{
    constructor(){}
    async vandorById(id:string){
        return await Vandor.findById(id);
    }
    async allVandors(){
        return 'hello'
    }
    create(input: any): void {
        throw new Error("Method not implemented.");
    }
    login({ email, password }: { email: string; password: string; }): void {
        throw new Error("Method not implemented.");
    }
    getProfile(): void {
        throw new Error("Method not implemented.");
    }
    findVandor(id: string | undefined, email?: string): void {
        throw new Error("Method not implemented.");
    } 
}