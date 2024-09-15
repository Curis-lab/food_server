import { Vendor } from '@entities';
import { vendorTDO } from 'use-cases/admin/admin.dtos';
export interface IAdminInteractor {
  createVendor(data: any): Promise<Vendor>;
  getVendors(): Promise<Vendor[]>;
}

export interface IAdminRepository {
  createVendor(data: vendorTDO): Promise<vendorTDO>;
  deleteVendor(id: string): Promise<boolean>;
  updateVendor(id: string, data: any): Promise<Vendor>;
  findById(id: string): Promise<Vendor>;
  find(): Promise<any[]>;
  patchVendor(id: string, updates: any): Promise<Vendor>;
  findByEmail(email: string): Promise<Vendor>;
}
