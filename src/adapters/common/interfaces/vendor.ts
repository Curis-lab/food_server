import { Food, Vendor } from "@entities";

export interface IVendorRepository{
    create(data:any):Promise<Vendor>;
    deleteVendor(id:string):Promise<boolean>;
    update(id:string):Promise<Vendor>;
    findById(id:string):Promise<Vendor>;
    getFoods():Promise<Vendor[]>;
    findByEmail(email:string):Promise<Vendor>;
    createFood(data:any):Promise<Food>;
    createFood(input:any):Promise<Food>;
    deleteFood(id:string):Promise<boolean>;
}

