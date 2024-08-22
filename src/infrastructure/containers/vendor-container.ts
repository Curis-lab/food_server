import { Container } from "inversify";
import { VendorInteractor } from "../../use-cases/vendor.interactor";
import { VendorRepository } from "../../adapters/common/repositories/vendor.rep";
import {
  IVendorInteractor,
  IVendorRepository,
} from "../../adapters/common/interfaces/vendor";
import {
  VENDOR_TYPES,
  VendorController,
} from "../../adapters/vendor/vendor.controller";
import VendorPresenter from "../../adapters/vendor/vendor.presenter";
import { VendorCollection } from "../collections/vendor-collection";

export function vendorLoadContainer() {
  const container = new Container();
  container
    .bind<IVendorRepository>(VENDOR_TYPES.VendorRepository)
    .to(VendorRepository);
  container
    .bind<IVendorInteractor>(VENDOR_TYPES.VendorInteractor)
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
