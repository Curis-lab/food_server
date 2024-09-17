import { inject, injectable } from 'inversify';
import { admin_types } from '../utils/jd-const';
import { IAdminRepository } from '../../adapters/common/interfaces/admin';
import {
  GeneratePassword,
  generateSalt,
} from '../../use-cases/utils/password-utls';
import { CreateVendorInput } from './admin.dtos';
import { AdminGateway, IAdminInteractor } from './admin.gateway';
import { Response } from 'express';
import AdminPresenter from 'adapters/admin/admin.presenter';
import { generateAdminGateway } from '@adapters/admin/admin.gateway';
import { logger } from '@useCases/utils/logger';

//what do I need for adminGateway

@injectable()
export class AdminInteractor implements IAdminInteractor {
  private _repos: IAdminRepository;
  private _presenter: AdminPresenter;
  private _adminGateway: AdminGateway;
  constructor(
    @inject(admin_types.adminrespository) repos: IAdminRepository,
    @inject(admin_types.adminpresenter) presenter: AdminPresenter,
  ) {
    this._repos = repos;
    this._presenter = presenter;
    this._adminGateway = new generateAdminGateway();
  }

  async createVendor(data: CreateVendorInput, responseModel: Response) {
    const { email, password } = data;
    if (!data) {
      logger.warn('input data did not found on vendor creating process.');
    }
    const existing_vendor = await this._adminGateway.findVendorByEmail(email);
    const rating = 5;
    if (existing_vendor) {
      return this._presenter.showError('vendor not found', responseModel);
    }

    const salt = await generateSalt();
    const hashed_password = await GeneratePassword(password, salt);

    const vendor_raw = {
      ...data,
      salt,
      rating,
      password: hashed_password,
    };

    const vendor = await this._adminGateway.createVendor(vendor_raw);

    return this._presenter.showSucces('vendor', responseModel);
  }

  async viewVendors(responseModel: Response) {
    const data = await this._repos.find();

    if (!data) {
      return this._presenter.showError('vendor not found', responseModel);
    }

    const reformatted = (data: any[], input: any, output: any) => {
      return data.reduce<any[]>((acc, cur) => {
        acc.push({
          id: cur._id.toString(),
          name: cur.name,
          ownerName: cur.ownerName,
          foodType: cur.foodType,
          pinCode: cur.pinCode,
          address: cur.address,
          phone: cur.phone,
          email: cur.email,
          password: cur.password,
          serviceAvailable: cur.serviceAvailable,
          coverImage: cur.coverImage,
          rating: cur.rating,
          foods: cur.foods,
        });
        return acc;
      }, []);
    };
    const vendors_update = data.reduce<any[]>((acc, cur) => {
      acc.push({
        id: cur._id.toString(),
        name: cur.name,
        ownerName: cur.ownerName,
        foodType: cur.foodType,
        pinCode: cur.pinCode,
        address: cur.address,
        phone: cur.phone,
        email: cur.email,
        password: cur.password,
        serviceAvailable: cur.serviceAvailable,
        coverImage: cur.coverImage,
        rating: cur.rating,
        foods: cur.foods,
      });
      return acc;
    }, []);
    return this._presenter.showSucces(vendors_update, responseModel);
  }
  async rejectVendor(id: string, responseModel: Response) {
    const existing = await this._repos.findById(id);
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
    const customer = await this._adminGateway.getAllCustomers();
    return this._presenter.showSucces(customer, responseModel);
  }
}
