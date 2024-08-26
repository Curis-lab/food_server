import { Container } from "inversify";
import { VendorInteractor } from "../../use-cases/vendor/vendor.interactor";
import { VendorRepository } from "../../adapters/common/repositories/vendor.rep";
import { IVendorRepository } from "../../adapters/common/interfaces/vendor";
import {
  VENDOR_TYPES,
  VendorController,
} from "../../adapters/vendor/vendor.controller";
import VendorPresenter from "../../adapters/vendor/vendor.presenter";
import { VendorCollection } from "../collections/vendor-collection";
import { VendorGateway } from "use-cases/vendor/vendor.gateway";

export function vendorLoadContainer() {
  const container = new Container();
  container
    .bind<IVendorRepository>(VENDOR_TYPES.VendorRepository)
    .to(VendorRepository);
  container
    .bind<VendorGateway>(VENDOR_TYPES.VendorInteractor)
    .to(VendorInteractor);
  container
    .bind<VendorPresenter>(VENDOR_TYPES.VendorPresenter)
    .to(VendorPresenter);
  container
    .bind<VendorController>(VENDOR_TYPES.VendorController)
    .to(VendorController);
  container.bind<VendorCollection>(VendorCollection).toSelf();
  return container;
}
