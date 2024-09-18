import { Response } from 'express';
import {
  GeneratePassword,
  generateSalt,
  generateSignature,
  validatePassword,
} from '@useCases/utils/password-utls';
import { GenerateOTP } from '@useCases/utils/otp';
import { customerInputDTO } from '@useCases/customer/customer.dto';
import { generateCustomerGateway } from '@adapters/customer/customer.gateway';
import CustomerPresenter from '@adapters/customer/customer.presenter';
import GenerateCustomerGatewy from './customer.gateway';
export default class CustomerInteractor {
  private _gateway: GenerateCustomerGatewy;
  private _presenter: any;
  constructor() {
    this._gateway = new generateCustomerGateway();
    this._presenter = new CustomerPresenter();
  }
  async customerRegister(input: customerInputDTO, res: Response) {
    const emailExisting = await this._gateway.findCustomerByEmail(input.email);
    if (emailExisting.length !== 0) {
      return res.send({ message: 'already existing on list' });
    }
    const salt = await generateSalt();
    const hashedPassword = await GeneratePassword(input.password, salt);
    const otp = GenerateOTP();
    const data = {
      ...input,
      salt,
      otp: otp.otp,
      password: hashedPassword,
      otp_expiry: otp.expiry,
    };
    const customer = await this._gateway.customerSignIn(data);
    if (!customer) {
      return this._presenter.showError('customer creating failed', res);
    }
    const signature = generateSignature({
      id: customer._id,
      email: customer.email,
    });

    return this._presenter.showSucces(signature, res);
  }

  async customerLogin(
    input: { email: string; password: string },
    res: Response,
  ) {
    try {
      const customer = await this._gateway.findCustomerByEmail(input.email);
      if (!customer) {
        return this._presenter.showError('customer did not exist', res);
      }
      const isPasswordValid = await validatePassword(
        input.password,
        customer[0].password,
        customer[0].salt,
      );
      if (!isPasswordValid) {
        return this._presenter.showError('Invalid password', res);
      }
      const signature = generateSignature({
        id: customer[0]._id,
        email: customer[0].email,
      });

      return this._presenter.showSucces(signature, res);
    } catch (error) {
      return this._presenter.showError(
        'customer failed due to server error',
        res,
      );
    }
  }
  async deleteCustomer(id: string, res: Response) {
    const deletedCustomer = await this._gateway.deleteCustomerById(id);
    return this._presenter.showSucces(deletedCustomer, res);
  }
  async customerProfile(id: string, res: Response) {
    const customer = await this._gateway.findCustomerById(id);
    return this._presenter.showSucces(customer, res);
  }
  async editCustomerProfile(
    id: string,
    input: customerInputDTO,
    res: Response,
  ) {
    const customer = await this._gateway.editProfile(id, input);
    return this._presenter.showSucces(customer, res);
  }
}
