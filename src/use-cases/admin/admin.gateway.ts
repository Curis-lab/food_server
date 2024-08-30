import { Vendor, Food } from "@entities";
import { CreateVendorInput, vendorTDO } from "./admin.dtos";
import { Response } from "express";

export interface IAdminInteractor {
  createVendor(data: CreateVendorInput, responseModel:Response):void;
  searchVendorById(id:string, responseModel: Response):void;
  viewVendors(responseModel: Response): void;
  viewAllProducts(responseModel: Response): void;
  rejectVendor(id: string, responseModel: Response): void;
  updateVendor(id:string,data:any, responseModel: Response):void;
}
//Gateway is responsible for connecting
// + other services
// + db, external systm
export interface AdminGateway{
  
}