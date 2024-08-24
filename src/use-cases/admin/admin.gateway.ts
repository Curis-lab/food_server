import { Vendor, Food } from "@entities";

export default interface AdminGateway {
  createVendor(data: any): Promise<Vendor>;
  viewVendors(): Promise<Vendor[]>;
  viewAllProducts(): Promise<Food[]>;
  rejectVendor(id: string): Promise<void>;
}
