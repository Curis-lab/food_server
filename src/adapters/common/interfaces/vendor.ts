import { Food, Vendor } from "@entities";

export interface IVendorRepository{
    create(data:any):Promise<Vendor>;
    deleteVendor(id:string):Promise<boolean>;
    update(id:string):Promise<Vendor>;
    findById(id:string):Promise<Vendor>;
    getAll():Promise<Vendor[]>;
    findByEmail(email:string):Promise<Vendor>;
    createFood(data:any):Promise<Food>;
}

