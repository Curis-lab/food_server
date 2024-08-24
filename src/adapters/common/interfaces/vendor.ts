import { Food, Vendor } from "@entities";

export interface IVendorRepository{
    create(data:any):Promise<Vendor>;
    delete(id:string| number):null;
    update(id:string):Promise<Vendor>;
    findById(id:string):Promise<Vendor>;
    getAll():Promise<Vendor[]>;
    findByEmail(email:string):Promise<Vendor>;
    createFood(data:any):Promise<Food>;
}

export interface IVendorInput{
    name:string;
    address:string;
    phone:string;
    email:string;
    password:string;
    coverImage:string
}