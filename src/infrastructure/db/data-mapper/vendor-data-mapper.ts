import VendorPersistenceData from '@adapters/common/models/vendor-persistence-data';
import DataMapper from '../data-mapper';

export default class VendorDataMapper extends DataMapper<VendorPersistenceData> {
  constructor(vendor: any) {
    super(vendor);
  }
  async deleteOne(id: string): Promise<boolean> {
    const data = await this.database.deleteOne({ _id: id });
    return Promise.resolve(data.deletedCount > 0);
  }
  async find(): Promise<VendorPersistenceData[]> {
    const data: VendorPersistenceData[] = await this.database.find();
    return Promise.resolve(data);
  }
  async findByEmail(email: string): Promise<VendorPersistenceData> {
    const data: VendorPersistenceData = await this.database.findOne({ email });
    return Promise.resolve(data);
  }
}
