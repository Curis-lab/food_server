import { inject, injectable } from 'inversify';
import { NextFunction, Request, Response } from 'express';

export const VENDOR_TYPES = {
  VendorRepository: Symbol.for('VendorRepository'),
  VendorInteractor: Symbol.for('VendorInteractor'),
  VendorController: Symbol.for('VendorController'),
  VendorPresenter: Symbol.for('VendorPresenter'),
};

@injectable()
export class VendorController {
  private _interactor: any;
  constructor(@inject(VENDOR_TYPES.VendorInteractor) interactor: any) {
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
