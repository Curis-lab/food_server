import { inject, injectable } from 'inversify';
import { VENDOR_TYPES } from '../../adapters/vendor/vendor.controller';
import VendorPresenter from 'adapters/vendor/vendor.presenter';
import { Response } from 'express';
import { generateVendorGateway } from '@adapters/vendor/vendor.gateway';
import {
  generateSignature,
  validatePassword,
} from '@useCases/utils/password-utls';

import mongoose from 'mongoose';
import GenerateVendorGateway from './vendor.gateway';

@injectable()
export class VendorInteractor {
  private _presenter: VendorPresenter;
  private _gateway: GenerateVendorGateway;
  constructor(
    @inject(VENDOR_TYPES.VendorPresenter) presenter: VendorPresenter,
  ) {
    this._presenter = presenter;
    this._gateway = new generateVendorGateway();
  }

  async vendorLogin(data: { email: string; password: string }, res: Response) {
    try {
      const { email, password } = data;

      const vendor = await this._gateway.findVendorByEmail(email);

      if (!vendor) {
        return this._presenter.showError('vendor not found', res);
      }
      const isPasswordValid = await validatePassword(
        password,
        vendor.password,
        vendor.salt,
      );
      if (!isPasswordValid) {
        return this._presenter.showError('Invalid password', res);
      }
      const signature = generateSignature({
        id: vendor._id,
        email: vendor.email,
      });

      return res.send({ signature });
    } catch (error) {
      return this._presenter.showError('login failed due to server error', res);
    }
  }

  async deleteFood(foodId: string, vendorId: string, res: Response) {
    try {
      const vendor = await this._gateway.findVendorById(vendorId);
      if (!vendor) {
        return this._presenter.showError('vendor not found', res);
      }
      vendor.foods = vendor.foods.filter((food: any) => food._id !== foodId);

      await vendor.save();

      const deleteFood = await this._gateway.deleteFoodById(foodId);
      if (!deleteFood) {
        return this._presenter.showError(
          'Food not found or already deleted',
          res,
        );
      }
    } catch (error) {
      return this._presenter.showError('Failed to delete food', res);
    }
  }
  async addFood(input: any, res: Response) {
    try {
      const vendor = await this._gateway.findVendorById(input.user.id);

      if (!vendor) {
        return this._presenter.showError('Vendor not found', res);
      }

      const { user, ...foodData } = input;
      const food = await this._gateway.addFood(foodData);

      if (!food) {
        return this._presenter.showError('Fail to add food', res);
      }

      vendor.foods.push(vendor._id);
      await vendor.save();

      return this._presenter.showSuccess(food, res);
    } catch {
      return this._presenter.showError('Fail to add food', res);
    }
  }
  async getFoods(vendorId: string, res: Response) {
    try {
      const foodIds = await this._gateway.vendorFoodIds(vendorId);
      if (!foodIds || foodIds.length === 0) {
        return this._presenter.showError('No food for the vendor', res);
      }
      const foods = await this._gateway.getFoodByIds(foodIds);
      if (!foods || foods.length === 0) {
        return this._presenter.showError('Foods not found', res);
      }
      return this._presenter.showSuccess(foods, res);
    } catch (error) {
      return this._presenter.showError('Failed to fetch foods', res);
    }
  }
  async getVendorProfileById(id: string, res: Response) {
    const data = await this._gateway.findVendorById(id);
    if (data) {
      return this._presenter.showSuccess(data, res);
    } else {
      return this._presenter.showError('vendor not found', res);
    }
  }
  async viewFoodById(foodId: string, vendorId: string, res: Response) {
    try {
      const vendor = await this._gateway.findVendorById(vendorId);

      if (!vendor) {
        return this._presenter.showError('vendor not found', res);
      }
      const objectId = new mongoose.Types.ObjectId(foodId);

      const foodExists = vendor.foods.find((id: any) => id.equals(objectId));
      if (!foodExists) {
        return this._presenter.showError(
          "Food not found in vendor's list",
          res,
        );
      }

      const food = await this._gateway.getFoodById(foodId);
      if (!food) {
        return this._presenter.showError('Food not found', res);
      }

      return this._presenter.showSuccess(food, res);
    } catch (error) {
      return this._presenter.showError('An error occurred', res);
    }
  }
}
