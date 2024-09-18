import { Container } from 'inversify';
import { VendorInteractor } from '../../use-cases/vendor/vendor.interactor';
import {
  VENDOR_TYPES,
  VendorController,
} from '../../adapters/vendor/vendor.controller';
import VendorPresenter from '../../adapters/vendor/vendor.presenter';
import { VendorCollection } from '../collections/vendor-collection';
import { VendorRepository } from '@adapters/common/repositories/vendor.rep';

export function vendorLoadContainer() {
  const container = new Container();
  container.bind<any>(VENDOR_TYPES.VendorInteractor).to(VendorInteractor);
  container.bind(VENDOR_TYPES.VendorRepository).to(VendorRepository);
  container
    .bind<VendorPresenter>(VENDOR_TYPES.VendorPresenter)
    .to(VendorPresenter);
  container
    .bind<VendorController>(VENDOR_TYPES.VendorController)
    .to(VendorController);
  container.bind<VendorCollection>(VendorCollection).toSelf();
  return container;
}
