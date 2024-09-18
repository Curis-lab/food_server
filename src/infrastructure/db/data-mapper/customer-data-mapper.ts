import { CustomerPersistenceData } from '@adapters/common/models/customer-persistence-data';
import DataMapper from '../data-mapper';
import { CustomerDataMapper } from '@adapters/common/interfaces/data-mappers';

export default class MongooseCustomerDataMapper
  extends DataMapper<CustomerPersistenceData>
  implements CustomerDataMapper
{
  constructor(customer: any) {
    super(customer);
  }
  async getAllCustomers(): Promise<any> {
    const data = await this.database.find();
    return Promise.resolve(data);
  }
  async findByEmail(email: string): Promise<any> {
    const data = await this.database.find({ email });
    return Promise.resolve(data);
  }
  async deleteById(id: string): Promise<any> {
    const deleted = await this.database.deleteOne({ _id: id });
    return Promise.resolve(deleted);
  }
}
