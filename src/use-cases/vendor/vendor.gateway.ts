export default interface GenerateVendorGateway {
  startTransaction(): Promise<void>;
  commitTransaction(): Promise<void>;
  rollbackTransaction(): Promise<void>;
  findVendorByEmail(email: string): Promise<any>;
  findVendorById(id: string): Promise<any>;
  deleteFoodById(id: string): Promise<any>;
  addFood(data: any): Promise<any>;
  vendorFoodIds(id: string): Promise<any>;
  getFoodByIds(ids: any): Promise<any>;
  getFoodById(id: string): Promise<any>;
}
