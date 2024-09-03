import { Customer } from "@infrastructure/db/mongo/models/customer";
import { Order } from "@infrastructure/db/mongo/models/order";
import { customerDTO } from "@useCases/customer/customer.dto";

export default class CustomerRepository {
  private customer;
  private orders;
  constructor() {
    this.customer = Customer;
    this.orders = Order;
  }
  //---------- customer ---------------
  async createCustomer(input: customerDTO): Promise<any> {
    try {
      const data = await this.customer.create(input);
      return Promise.resolve(data);
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
  async deleteCustomer(id:string):Promise<boolean>{
    const data = await this.customer.findByIdAndDelete(id);
    return Promise.resolve(true);
  }
  async getCustomerById(id: string): Promise<any> {
    const data = await this.customer.findById(id);
    return Promise.resolve(data);
  }
  async updateCustomer(id:string, input: any): Promise<any> {
    const data = await this.customer.updateOne({_id: id},{$set: input});
    return Promise.resolve(data);
  }
  //-------------end: customer data fetching-----------
  //---------- orders ---------------
  async getOrders():Promise<any>{
    throw new Error("Order")
  }
}
