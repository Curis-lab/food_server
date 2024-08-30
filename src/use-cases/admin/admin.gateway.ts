import { Vendor, Food } from "@entities";
import { CreateVendorInput, vendorTDO } from "./admin.dtos";
import { VendorDoc } from "infrastructure/db/mongo/models/vendor";

export default interface AdminGateway {
  createVendor(data: CreateVendorInput): Promise<vendorTDO|string>;
  searchVendorById(id:string):Promise<Vendor>;
  viewVendors(): Promise<Vendor[]>;
  viewAllProducts(): Promise<Food[]>;
  rejectVendor(id: string): Promise<string>;
  updateVendor(id:string,data:any):Promise<Vendor>;
}
