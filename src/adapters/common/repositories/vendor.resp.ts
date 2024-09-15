import { VendorProps } from '@entities';
import VendorDataMapper from '@infrastructure/db/data-mapper/vendor-data-mapper';
import { Vendor } from '@infrastructure/db/mongo/models/vendor';

type GConstructor<T = {}> = new (...args: any[]) => T;

export function MixVendorRepository<TBase extends GConstructor>(
  baseClass: TBase,
) {
  return class extends baseClass {
    private _vendor: any;
    constructor(...args: any[]) {
      super(...args);
      this._vendor = new VendorDataMapper(Vendor);
    }
    async createVendor(data: VendorProps): Promise<VendorProps> {
      const vendor = await this._vendor.insert(data);
      return Promise.resolve(vendor as VendorProps);
    }
    async deleteVendor(id: string): Promise<boolean> {
      const deleted: boolean = await this._vendor.deleteOne(id);
      return Promise.resolve(deleted);
    }
    async updateVendor(id: string, data: any): Promise<VendorProps> {
      const result = await this._vendor.updateById(id, data);
      return Promise.resolve(result);
    }
    async findById(id: string): Promise<VendorProps> {
      const result = await this._vendor.findById(id);
      return Promise.resolve(result);
    }
    async patchVendor(id: string, updates: any): Promise<VendorProps> {
      const result = await this._vendor.updateById(id, updates);
      return result;
    }
    async find(): Promise<any[]> {
      return await this._vendor.find();
    }
    async findByEmail(email: string): Promise<VendorProps> {
      return await this._vendor.findByEmail(email);
    }
  };
}
