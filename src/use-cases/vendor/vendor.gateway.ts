import {Vendor, Food} from '@entities';

export interface VendorGateway{
    getVendorProfileById(id:string):Promise<Vendor>;
    getVendorProfileByEmail(email:string):Promise<Vendor>;
    updateVendorProfile(data:any):Promise<Vendor>;
    addFood(data:any):Promise<Food>;
    getFoods():Promise<Food[]>;
}

export interface VendorCando{
    discount():Promise<Food>;
    review():Promise<void>;
    order():Promise<void>;
}