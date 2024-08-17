import { Food } from "../models/food";
import { Vendor } from "../models/vendor";

export interface IVendorInteractor{
    getVendorProfileById(id:string):Promise<Vendor>;
    getVendorProfileByEmail(email:string):Promise<Vendor>;
    updateVendorProfile(data:any):Promise<Vendor>;
    addFood(data:any):Promise<Food>;
    getFoods():Promise<Food[]>;
}

export interface IVendorRepository{
    create(data:any):Promise<Vendor>;
    delete(id:string| number):null;
    update(id:string):Promise<Vendor>;
    findById(id:string):Promise<Vendor>;
    getAll():Promise<Vendor[]>;
    findByEmail(email:string):Promise<Vendor>;
}