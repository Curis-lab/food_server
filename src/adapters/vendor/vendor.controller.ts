import { inject, injectable } from 'inversify';
import { NextFunction, Request, Response } from 'express';
import { VendorGateway } from 'use-cases/vendor/vendor.gateway';
import foodDTO from '../../use-cases/vendor/vendor.dtos';

export const VENDOR_TYPES = {
  VendorRepository: Symbol.for('VendorRepository'),
  VendorInteractor: Symbol.for('VendorInteractor'),
  VendorController: Symbol.for('VendorController'),
  VendorPresenter: Symbol.for('VendorPresenter'),
};

@injectable()
export class VendorController {
  private _interactor: any;
  private _presenter: any;
  constructor(
    @inject(VENDOR_TYPES.VendorInteractor) interactor: VendorGateway,
    @inject(VENDOR_TYPES.VendorPresenter) presenter: any,
  ) {
    this._interactor = interactor;
    this._presenter = presenter;
  }
  getFoods(req: Request, res: Response) {
    this._interactor.getFoods(res);
  }
  addFood(req: Request, res: Response) {
    const food = <foodDTO>req.body;
    this._interactor.addFood(food, res);
  }
  editFood(req: Request, res: Response) {}
  deleteFood(req: Request, res: Response) {
    const id = req.params.id;
    this._interactor.deleteFood(id, res);
  }

  viewOrders() {}
  updateOrderStatus() {}

  viewCustomerInfo() {}
  manageProfile() {}
  async VendorLogin(req: Request, res: Response) {
    type Tauth = { email: string; password: string };
    const { email, password } = <Tauth>req.body;
    this._interactor.vendorLogin({ email, password }, res);
  }

  async GetVendorProfile(req: Request, res: Response) {
    const data = await this._interactor.getVendorProfileById(
      '66c45ff6b7e8a571a43fe07b',
    );
    if (data) {
      return this._presenter.showSuccess(data, res);
    } else {
      return this._presenter.showError('Get vendor profile error', res);
    }
  }

  async UpdateVendorProfile(req: Request, res: Response, next: NextFunction) {
    return res.send({ message: 'update profile' });
  }
  async AddFood(req: Request, res: Response) {
    type CreateFoodInputs = {
      name: string;
      description: string;
      category: string;
      foodType: string;
      readyTime: number;
      price: number;
    };
    const food = <CreateFoodInputs>req.body;
    // const data = await this._interactor.addFood(food);
    // if (data) {
    // return this._presenter.showSuccess(data, res);
    // } else {
    return this._presenter.showError('Add Food Error', res);
    // }
  }
}
