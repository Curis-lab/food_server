import {Vendor, Food} from '@entities';
import FoodTDO from '../../use-cases/vendor/vendor.dtos';
import { Response } from 'express';
export interface VendorGateway{
    getVendorProfileById(id:string):Promise<Vendor>;
    getVendorProfileByEmail(email:string):Promise<Vendor>;
    updateVendorProfile(data:any):Promise<Vendor>;
    addFood(data: FoodTDO, res: Response):void;
    getFoods(res: Response):void;
}

export interface VendorCando{
    discount():Promise<Food>;
    review():Promise<void>;
    order():Promise<void>;
}
/**
 * manage products: Add Edit and Delete products
 * view orders: see and update order status
 * customer Support: Respond to customer question
 * profile : Edit vendor account info
 */
interface VendorPerform{
    //manage product
    addNewProduct():Promise<void>;
    editProductInfo():Promise<void>;
    deleteProduct():Promise<void>;
    // view orders
    viewOrders():Promise<void>;
    updateOrderStatus():Promise<void>;
    issuseRefundsNCancellation():Promise<void>;
    //customer support
    viewCustomerInfo():Promise<void>;
    customerSupport():Promise<void>;
    //profile
    manageVendorProfile():Promise<void>;
}