import { NextFunction, Request, Response } from "express";
import CustomerInteractor from "@useCases/customer/customer.interactor";
import { customerInputDTO } from "@useCases/customer/customer.dto";

export default class CustomerController {
  private interactor;
  constructor() {
    this.interactor = new CustomerInteractor();
  }
  signUp(req: Request, res: Response, next: NextFunction) {
    const input = <customerInputDTO>req.body;
    this.interactor.customerRegister(input, res);
  }
  deleteAccount(req:Request, res:Response, next:NextFunction){
    const id = req.params.id;
    this.interactor.deleteCustomer(id, res);
  }
  login() {}
  viewProfile(req: Request, res: Response, next:NextFunction) {
    const id = req.params.id;
    this.interactor.getCustomer(id, res);
  }
  updateProfile(req: Request, res: Response, next:NextFunction) {
    const input = <customerInputDTO>req.body;
  }
  viewOrders() {}
  viewOrderDetails() {}
  viewCart() {}
  addToCart() {}
  viewWishlist() {}
  submitSupportTicket() {}
  viewNotification() {}
}
