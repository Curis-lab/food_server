import express from "express";
import { Container, inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../container";
import { VendorInteractor } from "../../use-cases/vendor.interactor";
import { VendorRepository } from "../../adapters/common/repositories/vendor.rep";
import {
  IVendorInteractor,
  IVendorRepository,
} from "../../adapters/common/interfaces/vendor";
import { VendorController } from "../../adapters/vendor/vendor.controller";
import VendorPresenter from "../../adapters/vendor/vendor.presenter";
import { VendorCollection } from "../web/collection/vendor-collection";


export function vendorLoadContainer() {
  const container = new Container();
  container
    .bind<IVendorRepository>(INTERFACE_TYPE.VendorRepository)
    .to(VendorRepository);
  container
    .bind<IVendorInteractor>(INTERFACE_TYPE.VendorInteractor)
    .to(VendorInteractor);
  container
    .bind<VendorPresenter>(INTERFACE_TYPE.VendorPresenter)
    .to(VendorPresenter);
  container
    .bind<VendorController>(INTERFACE_TYPE.VendorController)
    .to(VendorController);
  container.bind<VendorCollection>(VendorCollection).toSelf();
  return container;
}
