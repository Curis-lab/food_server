import { Food } from "../models/food";
import { Vendor } from "../models/vendor";

export interface IVendorInteractor{
    getVendorProfile(id:string):Promise<Vendor>;
    updateVendorProfile(data:any):Promise<Vendor>;
    addFood(data:any):Promise<Food>;
    getFoods():Promise<Food[]>;
}
export interface IVendorRepository{
    create(data:any):Promise<Vendor>;
    delete(id:string| number):null;
    update(id:string):Promise<Vendor>;
    findOne(id:string):Promise<Vendor>;
    getAll():Promise<Vendor[]>;
}