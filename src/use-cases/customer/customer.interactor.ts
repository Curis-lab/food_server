import CustomerRepository from '@adapters/common/repositories/customer.rep';
import { Response } from 'express';
import { customerDTO } from './customer.dto';
import { generateSalt } from '@useCases/utils/password-utls';
import { GenerateOTP } from '@useCases/utils/otp';
import { customerInputDTO } from '@useCases/customer/customer.dto';
export default class CustomerInteractor {
  private repository;
  constructor() {
    this.repository = new CustomerRepository();
  }
  async customerRegister(input: customerInputDTO, res: Response) {
    const salt = await generateSalt();
    const otp = GenerateOTP();
    const customer: customerDTO = {
      ...input,
      salt,
      otp: otp.otp,
      otp_expiry: otp.expiry,
    };

    const data = await this.repository.createCustomer(customer);
    return res.send(data);
  }
  async deleteCustomer(id: string, res: Response) {
    await this.repository.deleteCustomer(id);
    return res.send({ message: 'deleted' });
  }
  async getCustomer(id: string, res: Response) {
    const data = await this.repository.getCustomerById(id);
    return res.send(data);
  }
  async editCustomerProfile(id: string, input: customerInputDTO, res: Response) {
    const data = await this.repository.updateCustomer(id, input);

    return res.send(data);
  }
}
