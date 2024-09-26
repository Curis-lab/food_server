import { VendorProps } from '@entities';
import MongooseVendorDataMapper from '@infrastructure/db/data-mapper/vendor-data-mapper';
import { Vendor } from '@infrastructure/db/mongo/models/vendor';
import { injectable } from 'inversify';
import { VendorDataMapper } from '../interfaces/data-mappers';

type GConstructor<T = {}> = new (...args: any[]) => T;

@injectable()
export class VendorRepository {}

export function MixVendorRepository<TBase extends GConstructor>(
  baseClass: TBase,
) {
  return class extends baseClass {
    private mapper: VendorDataMapper;
    constructor(...args: any[]) {
      super(...args);
      this.mapper = new MongooseVendorDataMapper(Vendor);
    }
    async vendorFoodIds(vendorId: string): Promise<any> {
      const vendor = await this.mapper.findById(vendorId);
      if (!vendor) {
        return Promise.resolve('this is not found');
      }
      const foodIds = vendor.foods;
      return Promise.resolve(foodIds);
    }
    async createVendor(data: VendorProps): Promise<any> {
      const vendor = await this.mapper.insert(data);
      return Promise.resolve('vendor');
    }
    async deleteVendor(id: string): Promise<Boolean> {
      const deleted = await this.mapper.deleteOne(id);
      return Promise.resolve(deleted);
    }
    async updateVendor(id: string, data: any): Promise<VendorProps> {
      const result = await this.mapper.updateById(id, data);
      return Promise.resolve(result);
    }
    async findVendorById(id: string): Promise<VendorProps> {
      const result = await this.mapper.findById(id);
      return Promise.resolve(result);
    }
    async patchVendor(id: string, updates: any): Promise<VendorProps> {
      const result = await this.mapper.updateById(id, updates);
      return result;
    }
    async getAllVendors(): Promise<any[]> {
      return await this.mapper.find();
    }
    async findVendorByEmail(email: string): Promise<VendorProps> {
      return await this.mapper.findByEmail(email);
    }
  };
}
