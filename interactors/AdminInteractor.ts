import { IAdminInteractor } from "../interface/IAdminInteractor";
import { IAdminRepository } from "../interface/IAdminRepository";
import { AdminRepository } from "../repositories/adminRepository";

export class AdminInteractor implements IAdminInteractor{
    private repository: IAdminRepository;
    constructor(
        respository:IAdminRepository
    ){
        this.repository = respository;
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