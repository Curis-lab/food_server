import { inject, injectable } from 'inversify';
import { NextFunction, Request, Response } from 'express';
import { VendorGateway } from 'use-cases/vendor/vendor.gateway';
import foodDTO from '../../use-cases/vendor/vendor.dtos';
import { Food } from '@infrastructure/db/mongo/models/food';
import VendorDataMapper from '@infrastructure/db/data-mapper/vendor-data-mapper';
import FoodDataMapper from '@infrastructure/db/data-mapper/food-data-mapper';

export const VENDOR_TYPES = {
  VendorRepository: Symbol.for('VendorRepository'),
  VendorInteractor: Symbol.for('VendorInteractor'),
  VendorController: Symbol.for('VendorController'),
  VendorPresenter: Symbol.for('VendorPresenter'),
};

@injectable()
export class VendorController {
  private _interactor: any;
  constructor(
    @inject(VENDOR_TYPES.VendorInteractor) interactor: VendorGateway,
  ) {
    this._interactor = interactor;
  }
  //-------------food section---------------
  getFoods(req: Request, res: Response) {
    const { id } = req.body.user;
    this._interactor.getFoods(id, res);
  }
  viewFood(req: Request, res: Response) {
    const foodId = req.params.id;
    const vendorId = req.body.user.id;
    this._interactor.viewFoodById(foodId, vendorId, res);
  }
  editFood(req: Request, res: Response) {}
  deleteFood(req: Request, res: Response) {
    const { id } = req.body.user;
    const foodId = req.params.id;
    this._interactor.deleteFood(foodId, id, res);
  }
  async addFood(req: Request, res: Response) {
    const food = <any>req.body;
    this._interactor.addFood(food, res);
  }

  //---------------end of food section--------------
  //-------------- order section------------------
  viewOrders() {}
  updateOrderStatus() {}
  // --------------- end of order section -----------
  viewCustomerInfo() {}
  manageProfile() {}
  async vendorLogin(req: Request, res: Response) {
    type Tauth = { email: string; password: string };
    const { email, password } = <Tauth>req.body;
    this._interactor.vendorLogin({ email, password }, res);
  }

  async getVendorProfile(req: Request, res: Response) {
    const { id } = req.body.user;
    this._interactor.getVendorProfileById(id, res);
  }

  async updateVendorProfile(req: Request, res: Response, next: NextFunction) {
    return res.send({ message: 'update profile' });
  }
}
