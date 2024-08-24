import { Vendor } from "@adapters/common/models/vendor";
import ProductProps from "entities/product";

export default interface AdminGateway {
  createVendor(data: any): Promise<Vendor>;
  viewVendors(): Promise<Vendor[]>;
  viewAllProducts(): Promise<ProductProps[]>;
  rejectVendor(id: string): Promise<void>;
}
