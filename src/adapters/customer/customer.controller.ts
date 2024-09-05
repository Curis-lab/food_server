import { NextFunction, Request, Response } from "express";
import CustomerInteractor from "@useCases/customer/customer.interactor";
import { customerInputDTO } from "@useCases/customer/customer.dto";

export default class CustomerController {
  private interactor;
  constructor() {
    this.interactor = new CustomerInteractor();
  }
  //-------------for customer services------------
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
    const id = req.params.id;
    this.interactor.editCustomerProfile(id,input, res);
  }
  //-------------------end of customer services-----------
  //-------------------for order services-----------------
  viewOrders(req: Request, res: Response, next:NextFunction) {
    return res.send({message:"view orders"})
  }
  viewOrderDetails(req: Request, res: Response, next:NextFunction) {
    return res.send({message:"view orders"})
  }
  //-------------------end of order services--------------
  //-----------------------cart services---------------
  viewCart() {}
  addToCart(req: Request, res: Response, next:NextFunction) {
    const input = req.body;
    return res.send({message:"add to card"});
  }
  //-----------------------end of cart services-----------------
  viewWishlist() {}
  submitSupportTicket() {}
  viewNotification(req: Request, res: Response, next:NextFunction) {
    
    return res.send({messge:"view notification"});
  }
}
