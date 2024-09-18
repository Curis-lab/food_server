import MongooseCustomerDataMapper from '@infrastructure/db/data-mapper/customer-data-mapper';
import { Customer } from '@infrastructure/db/mongo/models/customer';
import { Order } from '@infrastructure/db/mongo/models/order';
import { customerDTO, customerInputDTO } from '@useCases/customer/customer.dto';
import { promises } from 'dns';
import { CustomerDataMapper } from '../interfaces/data-mappers';

export default class CustomerRepository {
  private customer;
  private orders;
  constructor() {
    this.customer = Customer;
    this.orders = Order;
  }
  //---------- customer ---------------
  async getAllCustomers(): Promise<any> {
    const data = await this.customer.find();
    return Promise.resolve(data);
  }
  async createCustomer(input: customerDTO): Promise<any> {
    try {
      const data = await this.customer.create(input);
      return Promise.resolve(data);
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
  async deleteCustomer(id: string): Promise<boolean> {
    const data = await this.customer.findByIdAndDelete(id);
    return Promise.resolve(true);
  }
  async getCustomerById(id: string): Promise<any> {
    const data = await this.customer.findById(id);
    return Promise.resolve(data);
  }
  async updateCustomer(id: string, input: customerInputDTO): Promise<any> {
    const data = await this.customer.updateOne({ _id: id }, { $set: input });
    return Promise.resolve(data);
  }
  //-------------end: customer data fetching-----------
  //---------- orders ---------------
  async getOrders(): Promise<any> {
    throw new Error('Order');
  }
}

type GConstructor<T = {}> = new (...args: any[]) => T;

export function MixCustomerRepository<TBase extends GConstructor>(
  Gateway: TBase,
) {
  return class extends Gateway {
    private _mapper: CustomerDataMapper;
    constructor(...args: any) {
      super(args);
      this._mapper = new MongooseCustomerDataMapper(Customer);
    }
    async getAllCustomers(): Promise<any> {
      const data = await this._mapper.getAllCustomers();
      return Promise.resolve(data);
    }
    async customerSignIn(input: any): Promise<any> {
      const data = await this._mapper.insert(input);
      return Promise.resolve(data);
    }
    async findCustomerByEmail(email: string): Promise<any> {
      const customer = await this._mapper.findByEmail(email);
      return Promise.resolve(customer);
    }
    async findCustomerById(id: string): Promise<any> {
      const customer = await this._mapper.findById(id);
      return Promise.resolve(customer);
    }
    async deleteCustomerById(id: string): Promise<any> {
      const deleted = await this._mapper.deleteById(id);
      return Promise.resolve(deleted);
    }
    async editProfile(id: string, input: any): Promise<any> {
      const customer = await this._mapper.updateById(id, input);
      return Promise.resolve(customer);
    }
  };
}
