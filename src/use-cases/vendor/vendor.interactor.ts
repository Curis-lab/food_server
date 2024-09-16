import { inject, injectable } from 'inversify';
import { IVendorRepository } from '../../adapters/common/interfaces/vendor';
import { VENDOR_TYPES } from '../../adapters/vendor/vendor.controller';
import { Vendor } from '@entities';
import foodTDO from '../../use-cases/vendor/vendor.dtos';
import VendorPresenter from 'adapters/vendor/vendor.presenter';
import { Response } from 'express';
import { generateVendorGateway } from '@adapters/vendor/vendor.gateway';
import { validatePassword } from '@useCases/utils/password-utls';

import jwt from 'jsonwebtoken';

@injectable()
export class VendorInteractor {
  private _vendorRepository: IVendorRepository;
  private _presenter: VendorPresenter;
  private _gateway: any;
  constructor(
    @inject(VENDOR_TYPES.VendorRepository) vendorRepository: IVendorRepository,
    @inject(VENDOR_TYPES.VendorPresenter) presenter: VendorPresenter,
  ) {
    this._vendorRepository = vendorRepository;
    this._presenter = presenter;
    this._gateway = new generateVendorGateway();
  }
  async vendorLogin(data: { email: string; password: string }, res: Response) {
    const { email, password } = data;
    const existing_vendor = await this._gateway.findByEmail(email);
    if (!existing_vendor) {
      return this._presenter.showError('vendor not found', res);
    }
    const decode_password = await validatePassword(
      password,
      existing_vendor.password,
      existing_vendor.salt,
    );

    if (decode_password) {
      const signature = jwt.sign(
        { id: existing_vendor._id, email: existing_vendor.email },
        process.env.jwt_sec as string,
        { expiresIn: '1d' },
      );
      return res.send({ signature });
    }
    return this._presenter.showError('vendor login fail', res);
  }
  async deleteFood(id: string, res: Response) {
    const deleted = await this._vendorRepository.deleteFood(id);
    return this._presenter.showSuccess(deleted, res);
  }
  async addFood(input: foodTDO, res: Response) {
    //attech on specific vendor
    //need to create session
    const food = await this._vendorRepository.createFood(input);
    return this._presenter.showSuccess(food, res);
  }
  async getFoods(res: Response) {
    const foods = await this._vendorRepository.getFoods();
    return this._presenter.showSuccess(foods, res);
  }
  async getVendorProfileByEmail(email: string): Promise<Vendor> {
    const data = await this._vendorRepository.findByEmail(email);
    return Promise.resolve(data);
  }
  async getVendorProfileById(id: string): Promise<Vendor> {
    const data = await this._vendorRepository.findById(id);
    return Promise.resolve(data);
  }
}
