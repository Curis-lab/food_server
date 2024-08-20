import "reflect-metadata";
import { Container, inject, injectable } from "inversify";
import { getContainer, loadContainer } from "../../infrastructure/container";

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

@injectable()
export class VendorController {
  login() {}
  getProfile() {}
  updateProfile() {}
  updateVendorService() {}
  addFood() {}
  getFood() {}
  updateVendorCoverImage() {}
}
@injectable()
export class AdminController {
  onUpdateVendor() {}
  onGetVendorById() {}
  onGetVendors() {}
  onDeleteVendorById() {}
  onCreateVendor() {}
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
      admin: () => this.adminController.onCreateVendor(),
    };
    return register[functionName] && args
      ? register[functionName](...args)
      : "Function not found";
  }
}

export const myService = loadContainer().get(MainCollection);
