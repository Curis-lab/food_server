import { Vendor, Food } from '@entities';
import { CreateVendorInput, vendorTDO } from './admin.dtos';
import { Response } from 'express';

export interface IAdminInteractor {
  createVendor(data: CreateVendorInput, responseModel: Response): void;
  searchVendorById(id: string, responseModel: Response): void;
  viewVendors(responseModel: Response): void;
  viewAllProducts(responseModel: Response): void;
  rejectVendor(id: string, responseModel: Response): void;
  updateVendor(id: string, data: any, responseModel: Response): void;
  viewCustomers(responseModel: Response): void;
}
export interface AdminGateway {
  startTransaction(): Promise<void>;
  commitTransaction(): Promise<void>;
  rollbackTransaction(): Promise<void>;
  findByEmail(email: string): Promise<any>;
  getAllCustomers(): Promise<any>;
  createVendor(data: CreateVendorInput): Promise<any>;
}
