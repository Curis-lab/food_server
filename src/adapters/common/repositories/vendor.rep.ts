import { VendorProps } from '@entities';
import VendorDataMapper from '@infrastructure/db/data-mapper/vendor-data-mapper';
import { Vendor } from '@infrastructure/db/mongo/models/vendor';
import { injectable } from 'inversify';

type GConstructor<T = {}> = new (...args: any[]) => T;

@injectable()
export class VendorRepository {}

export function MixVendorRepository<TBase extends GConstructor>(
  baseClass: TBase,
) {
  return class extends baseClass {
    private _mapper: any;
    constructor(...args: any[]) {
      super(...args);
      this._mapper = new VendorDataMapper(Vendor);
    }
    async vendorFoodIds(vendorId: string): Promise<any> {
      const vendor = await this._mapper.findById(vendorId);
      if (!vendor) {
        return Promise.resolve('this is not found');
      }
      const foodIds = vendor.foods;
      return Promise.resolve(foodIds);
    }
    async createVendor(data: VendorProps): Promise<any> {
      const vendor = await this._mapper.insert(data);
      return Promise.resolve('vendor');
    }
    async deleteVendor(id: string): Promise<boolean> {
      const deleted: boolean = await this._mapper.deleteOne(id);
      return Promise.resolve(deleted);
    }
    async updateVendor(id: string, data: any): Promise<VendorProps> {
      const result = await this._mapper.updateById(id, data);
      return Promise.resolve(result);
    }
    async findVendorById(id: string): Promise<VendorProps> {
      const result = await this._mapper.findById(id);
      return Promise.resolve(result);
    }
    async patchVendor(id: string, updates: any): Promise<VendorProps> {
      const result = await this._mapper.updateById(id, updates);
      return result;
    }
    async getAllVendor(): Promise<any[]> {
      return await this._mapper.find();
    }
    async findVendorByEmail(email: string): Promise<VendorProps> {
      return await this._mapper.findByEmail(email);
    }
  };
}
