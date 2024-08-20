import { Container } from "inversify";
import {
  AdminController,
  VendorController,
  CustomerController,
  ShoppingController,
  MainCollection,
  GoodByeService,
  HelloService,
  TYPES,
} from "../adapters/admin/admin.controller";

export const INTERFACE_TYPE = {
  VendorRepository: Symbol.for("VendorRepository"),
  VendorInteractor: Symbol.for("VendorInteractor"),
  VendorController: Symbol.for("VendorController"),
  VendorPresenter: Symbol.for("VendorPresenter"),
};

let container: Container;

export function loadContainer() {
  container = new Container();
  container.bind<HelloService>(TYPES.HelloServices).to(HelloService);
  container.bind<GoodByeService>(TYPES.GoodByeService).to(GoodByeService);
  container.bind<AdminController>(TYPES.AdminController).to(AdminController);
  container.bind<VendorController>(TYPES.VendorController).to(VendorController);
  container
    .bind<CustomerController>(TYPES.CustomerController)
    .to(CustomerController);
  container
    .bind<ShoppingController>(TYPES.ShoppingController)
    .to(ShoppingController);
  container.bind<MainCollection>(MainCollection).toSelf();
  return container;
}

export const getContainer= ():Container =>{
  return container;
}
