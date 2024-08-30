import { Vendor } from "../../entities";
import { inject, injectable } from "inversify";
import { admin_types } from "../utils/jd-const";
import { IAdminRepository } from "../../adapters/common/interfaces/admin";
import {
  GeneratePassword,
  generateSalt,
} from "../../use-cases/utils/password-utls";
import { CreateVendorInput, vendorTDO } from "./admin.dtos";
import { IAdminInteractor } from "./admin.gateway";
import {Response } from "express";
import AdminPresenter from "adapters/admin/admin.presenter";

@injectable()
export class AdminInteractor implements IAdminInteractor {
  private _repos: IAdminRepository;
  private _presenter: AdminPresenter;
  constructor(
    @inject(admin_types.adminrespository) repos: IAdminRepository,
    @inject(admin_types.adminpresenter) presenter: AdminPresenter
  ) {
    this._repos = repos;
    this._presenter = presenter;
  }

  async createVendor(data: CreateVendorInput, responseModel: Response) {
    const { email, password } = data;
    const existing_vendor = await this._repos.findByEmail(email);
    if (!existing_vendor) {
      return this._presenter.showError("vendor not found", responseModel);
    }
    const salt = await generateSalt();
    const hashed_password = await GeneratePassword(password, salt);

    const vendor_raw = {
      ...data,
      salt,
      password: hashed_password,
    };
    const vendor = await this._repos.createVendor(Vendor.build(vendor_raw) as vendorTDO);
    return this._presenter.showSucces(vendor, responseModel);
  }

  async viewVendors(responseModel: Response) {
    const data = await this._repos.find();

    if (!data) {
      return this._presenter.showError("vendor not found", responseModel);
    }

    
    const vendors: any[] = data.map(
      ({
        name,
        ownerName,
        pinCode,
        address,
        phone,
        email,
        password,
        salt,
        serviceAvailable,
        coverImage,
        rating,
        foodType,
        foods,
      }) => ({
        name,
        ownerName,
        pinCode,
        address,
        phone,
        email,
        password,
        salt,
        serviceAvailable,
        coverImage,
        rating,
        foodType,
        foods,
      })
    );
    return this._presenter.showSucces(vendors, responseModel);
  }
  async rejectVendor(id: string, responseModel: Response) {
    const existing = await this._repos.findById(id);
    if (!existing) {
      return this._presenter.showError("vendor not found", responseModel);
    }
    const vendor_deleted = await this._repos.deleteVendor(id);
    if (vendor_deleted) {
      return this._presenter.showSucces("Succefully deleted", responseModel);
    } else {
      return this._presenter.showError("Error in deleting", responseModel);
    }
  }
  async viewAllProducts(responseModel: Response){
    const data = await this._repos.find();
    return this._presenter.showSucces(data, responseModel);
  }
  async updateVendor(id: string, data: any, responseModel:Response) {
    const vendor = await this._repos.patchVendor(id, data);
    return this._presenter.showSucces(vendor, responseModel);
  }
  async searchVendorById(id: string, responseModel: Response){
    const vendor = await this._repos.findById(id);
    return this._presenter.showSucces(vendor, responseModel);
  }
}
