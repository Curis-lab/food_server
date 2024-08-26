import { IVendorInput } from "../../../../dto";
import { VandorDoc } from "../../../../models";
import { Vendor } from "../models/vendor";

export interface IAdminInteractor{
    createVendor(data:any):Promise<Vendor>;
    getVendors():Promise<Vendor[]>;
}

export interface IAdminRepository{
    createVendor(data:IVendorInput):Promise<VandorDoc>;
    deleteVendor(id:string):Promise<boolean>;
    updateVendor(id:string, data:any):Promise<Vendor>;
    findById(id:string):Promise<Vendor>;  
    find():Promise<Vendor[]>  
}
