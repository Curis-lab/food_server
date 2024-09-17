export interface vendorGateway {
  findVendorByEmail(email: string): Promise<any>;
  findVendorById(id: string): Promise<any>;
  vendorFoodIds(id: string): Promise<any>;
  deleteFoodById(id: string): Promise<any>;
  addFood(input: any): Promise<any>;
  getFoodByIds(foodIds: any[]): Promise<any>;
  getFoodById(id: string): Promise<any>;
}
