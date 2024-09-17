import { Vendor, Food } from '@entities';
import FoodTDO from '../../use-cases/vendor/vendor.dtos';
import { Response } from 'express';

export interface VendorGateway {
  getVendorProfileById(id: string): Promise<Vendor>;
  getVendorProfileByEmail(email: string): Promise<Vendor>;
  addFood(data: FoodTDO, res: Response): void;
  getFoods(res: Response): void;
  deleteFood(id: string, res: Response): void;
}

export interface vendorGateway {
  findByEmail(email: string): Promise<any>;
  findById(id: string): Promise<any>;
  addFood(input: any): Promise<any>;
  vendorFoodIds(id: string): Promise<any>;
  getFoodByIds(foodIds: any[]): Promise<any>;
}

export interface VendorCando {
  discount(): Promise<Food>;
  review(): Promise<void>;
  order(): Promise<void>;
}
