import { Admin } from "../../../../entities/Admin";
import { Vendor } from "../models/vendor";

export interface IAdminInteractor{
    createVendor(id:string):Promise<Vendor>;
    getVendors():Promise<Vendor[]>;
}

export interface IAdminRepository{
    create(data:any):Promise<Vendor>;
    delete(id:string):null;
    update(id:string):Promise<Vendor>;
    findById(id:string):Promise<Vendor>;    
}
