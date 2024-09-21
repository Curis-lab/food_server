import { CustomerPersistenceData } from '../models/customer-persistence-data';
import { FoodPersistenceData } from '../models/food-persistence-data';
import VendorPersistenceData from '../models/vendor-persistence-data';
import { Types } from 'mongoose';

export interface AbstractDataMapper<Model> {
  findById(id: number | string): Promise<Model>;
  insert(model: Model): Promise<void>;
  bluckInsert(models: Model[]): Promise<void>;
  updateById(id: number | string, data: Partial<Model>): Promise<Model>;
}

export interface VendorDataMapper
  extends AbstractDataMapper<VendorPersistenceData> {
  deleteOne(id: string): Promise<Boolean>;
  find(): Promise<VendorPersistenceData[]>;
  findByEmail(email: string): Promise<VendorPersistenceData>;
}

export interface FoodDataMapper
  extends AbstractDataMapper<FoodPersistenceData> {
  foodListByIds(ids: Types.ObjectId[]): Promise<any>;
  delete(id: string): Promise<Boolean>;
  foods(): Promise<any>;
  findQuery(input: any): Promise<any>;
}

export interface CustomerDataMapper
  extends AbstractDataMapper<CustomerPersistenceData> {
  getAllCustomers(): Promise<any>;
  findByEmail(email: string): Promise<any>;
  deleteById(id: string): Promise<any>;
}
