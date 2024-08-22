import "reflect-metadata";
import { Container, inject, injectable } from "inversify";
import { getContainer, loadContainer } from "../../infrastructure/container";
import { Vandor } from "../../../models";

export const TYPES = {
  FunctionRegistry: Symbol.for("FunctionRegistry"),
  HelloServices: Symbol.for("HelloService"),
  GoodByeService: Symbol.for("GoodByeService"),
  VendorController: Symbol.for("VendorController"),
  AdminController: Symbol.for("AdminController"),
  CustomerController: Symbol.for("CustomerController"),
  ShoppingController: Symbol.for("ShoppingController"),
};

//controller
@injectable()
export class HelloService {
  sayHello(name: string): string {
    return `hello , ${name}`;
  }
}

@injectable()
export class GoodByeService {
  sayGoodBye(name: string): string {
    return `Goodbye, ${name}`;
  }
}
//projected only clean dat
@injectable()
export class VendorController {
  async login() { 
    return 'vendor profile login'
  }
  getProfile() {}
  updateProfile() {}
  updateVendorService() {}
  addFood() {}
  getFood() {}
  updateVendorCoverImage() {}
}
@injectable()
export class AdminController {
  private _repository:any;
  constructor(){
    this._repository = Vandor;
  }
  onUpdateVendor() {
    return `this is on update vendor`
  }
  onGetVendorById() {
    return `this is on get vendor by id`
  }
  onGetVendors() {
    return `this is on get vendor`
  }
  onDeleteVendorById() {
    return `this is on delete vendor by id`
  }
  onCreateVendor() {
    return `this is on create vendor`
  }
}
@injectable()
export class CustomerController {
  customerSignUp() {}
  customerSignIn() {}
  customerProfile() {}
  customerEditProfile() {}
  createOrder() {}
}
@injectable()
export class ShoppingController {
  getAllFood() {}
  getFoodAvailablity() {}
  getTopResturent() {}
  getFoodUnder30Min() {}
  searchFoods() {}
  getResturantById() {}
}

//services
@injectable()
export class MainCollection {
  constructor(
    @inject(TYPES.HelloServices) private helloService: HelloService,
    @inject(TYPES.GoodByeService) private goodByeService: GoodByeService,
    @inject(TYPES.AdminController) private adminController: AdminController,
    @inject(TYPES.VendorController) private vendorController: VendorController,
    @inject(TYPES.CustomerController)
    private customerController: CustomerController,
    @inject(TYPES.ShoppingController)
    private shoppingController: ShoppingController
  ) {}
  callFunctionByName(functionName: string, ...args: any[]): any {
    const register: Record<string, (...args: any[]) => any> = {
      sayHello: (name: string) => this.helloService.sayHello(name),
      sayGoodBye: (name: string) => this.goodByeService.sayGoodBye(name),
      createVendor: () => this.adminController.onCreateVendor(),
    };

    //returning of the data too cohesion
    return register[functionName] && args
      ? register[functionName](...args)
      : "Function not found";
  }
}

export const myService = loadContainer().get(MainCollection);
