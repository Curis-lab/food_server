import { inject, injectable } from 'inversify';
import { admin_types } from '../utils/jd-const';
import { IAdminRepository } from '../../adapters/common/interfaces/admin';
import {
  GeneratePassword,
  generateSalt,
} from '../../use-cases/utils/password-utls';
import { CreateVendorInput } from './admin.dtos';
import { GenerateAdminGateway } from './admin.gateway';
import { Response } from 'express';
import AdminPresenter from 'adapters/admin/admin.presenter';
import { generateAdminGateway } from '@adapters/admin/admin.gateway';
import { logger } from '@useCases/utils/logger';

@injectable()
export class AdminInteractor {
  private _repos: IAdminRepository;
  private _presenter: AdminPresenter;
  private _gateway: GenerateAdminGateway;
  constructor(
    @inject(admin_types.adminrespository) repos: IAdminRepository,
    @inject(admin_types.adminpresenter) presenter: AdminPresenter,
  ) {
    this._repos = repos;
    this._presenter = presenter;
    this._gateway = new generateAdminGateway();
  }

  async createVendor(data: CreateVendorInput, responseModel: Response) {
    const { email, password } = data;
    if (!data) {
      logger.warn('input data did not found on vendor creating process.');
    }
    const existing_vendor = await this._gateway.findVendorByEmail(email);
    const rating = 5;
    if (existing_vendor) {
      return this._presenter.showError('vendor already exist', responseModel);
    }

    const salt = await generateSalt();
    const hashed_password = await GeneratePassword(password, salt);

    const vendor_raw = {
      ...data,
      salt,
      rating,
      password: hashed_password,
    };

    await this._gateway.createVendor(vendor_raw);

    return this._presenter.showSucces('vendor', responseModel);
  }

  async viewVendors(responseModel: Response) {
    const vendors: any[] = await this._gateway.getAllVendors();
    if (!vendors) {
      return this._presenter.showError('vendor not found', responseModel);
    }
    const updatedVendors: any[] = vendors.map((vendor) => ({
      id: vendor._id.toString(),
      name: vendor.name,
      ownerName: vendor.ownerName,
      foodType: vendor.foodType,
      pinCode: vendor.pinCode,
      address: vendor.address,
      phone: vendor.phone,
      email: vendor.email,
      password: vendor.password,
      serviceAvailable: vendor.serviceAvailable,
      coverImage: vendor.coverImage,
      rating: vendor.rating,
      foods: vendor.foods,
    }));
    return this._presenter.showPagnination(updatedVendors, responseModel);
  }
  async rejectVendor(id: string, responseModel: Response) {
    const existing = await this._gateway.findVendorById(id);
    if (!existing) {
      return this._presenter.showError('vendor not found', responseModel);
    }
    const vendor_deleted = await this._repos.deleteVendor(id);
    if (vendor_deleted) {
      return this._presenter.showSucces('Succefully deleted', responseModel);
    } else {
      return this._presenter.showError('Error in deleting', responseModel);
    }
  }
  async viewAllProducts(responseModel: Response) {
    const data = await this._repos.find();
    return this._presenter.showSucces(data, responseModel);
  }
  async updateVendor(id: string, data: any, responseModel: Response) {
    const vendor = await this._repos.patchVendor(id, data);
    return this._presenter.showSucces(vendor, responseModel);
  }
  async searchVendorById(id: string, responseModel: Response) {
    const vendor = await this._repos.findById(id);
    return this._presenter.showSucces(vendor, responseModel);
  }

  async viewCustomers(responseModel: Response) {
    const customer = await this._gateway.getAllCustomers();
    return this._presenter.showPagnination(customer, responseModel);
  }
}
