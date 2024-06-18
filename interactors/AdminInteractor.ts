import { IAdminInteractor } from "../interface/IAdminInteractor";

export class AdminInteractor implements IAdminInteractor{
    create(input: any): void {
        throw new Error("Method not implemented.");
    }
    login({ email, password }: { email: string; password: string; }): void {
        throw new Error("Method not implemented.");
    }
    getProfile(): void {
        throw new Error("Method not implemented.");
    }
}