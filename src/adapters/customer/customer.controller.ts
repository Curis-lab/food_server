import { Request, Response } from 'express';
import CustomerInteractor from '@useCases/customer/customer.interactor';
import { customerInputDTO } from '@useCases/customer/customer.dto';

//I build it customer data processing upon on signature token
export default class CustomerController {
  private _interactor: any;
  constructor() {
    this._interactor = new CustomerInteractor();
  }
  //-------------for customer services------------
  signUp(req: Request, res: Response) {
    const input = <customerInputDTO>req.body;
    this._interactor.customerRegister(input, res);
  }
  login(req: Request, res: Response) {
    this._interactor.customerLogin(req.body, res);
  }
  deleteAccount(req: Request, res: Response) {
    this._interactor.deleteCustomer(req.body.user.id, res);
  }
  viewProfile(req: Request, res: Response) {
    this._interactor.customerProfile(req.body.user.id, res);
  }

  updateProfile(req: Request, res: Response) {
    const input = <customerInputDTO>req.body;
    this._interactor.editCustomerProfile(req.body.user.id, input, res);
  }
  //-------------------end of customer services-----------
  //-------------------for order services-----------------
  viewOrders(req: Request, res: Response) {
    return res.send({ message: 'view orders' });
  }
  viewOrderDetails(req: Request, res: Response) {
    return res.send({ message: 'view orders' });
  }
  //-------------------end of order services--------------
  //-----------------------cart services---------------
  viewCart() {}
  addToCart(req: Request, res: Response) {
    return res.send({ message: 'add to card' });
  }
  //-----------------------end of cart services-----------------
  viewWishlist() {}
  submitSupportTicket() {}
  viewNotification(req: Request, res: Response) {
    return res.send({ messge: 'view notification' });
  }
}
