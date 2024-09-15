import { inject, injectable } from 'inversify';
import { IVendorRepository } from '../../adapters/common/interfaces/vendor';
import { VENDOR_TYPES } from '../../adapters/vendor/vendor.controller';
import { VendorGateway } from './vendor.gateway';
import { Vendor } from '@entities';
import foodTDO from '../../use-cases/vendor/vendor.dtos';
import VendorPresenter from 'adapters/vendor/vendor.presenter';
import { Response } from 'express';
@injectable()
export class VendorInteractor implements VendorGateway {
  private _vendorRepository: IVendorRepository;
  private _presenter: VendorPresenter;
  constructor(
    @inject(VENDOR_TYPES.VendorRepository) vendorRepository: IVendorRepository,
    @inject(VENDOR_TYPES.VendorPresenter) presenter: VendorPresenter,
  ) {
    this._vendorRepository = vendorRepository;
    this._presenter = presenter;
  }
  async deleteFood(id: string, res: Response) {
    const deleted = await this._vendorRepository.deleteFood(id);
    return this._presenter.showSuccess(deleted, res);
  }
  async addFood(input: foodTDO, res: Response) {
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
