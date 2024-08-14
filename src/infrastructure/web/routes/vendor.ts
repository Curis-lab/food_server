import express, { Request, Response } from 'express';
import { VendorController } from '../../../adapters/vendor/vendor.controller';
import { Container } from "inversify";
import { INTERFACE_TYPE } from "../../container";
import { VendorRepository } from "../../../adapters/common/repositories/vendor.rep";
import { IVendorInteractor, IVendorRepository } from "../../../adapters/common/interfaces/vendor";
import { VendorInteractor } from "../../../use-cases/vendor.interactor";

//container registration
const container = new Container();
container.bind<IVendorRepository>(INTERFACE_TYPE.VendorRepository).to(VendorRepository);
container.bind<IVendorInteractor>(INTERFACE_TYPE.VendorInteractor).to(VendorInteractor);
container.bind(INTERFACE_TYPE.VendorController).to(VendorController);


const router = express.Router();

const controller = container.get<VendorController>(INTERFACE_TYPE.VendorController);

// router.get('/',controller.VendorLogin.bind(controller));
router.get('/profile',controller.GetVendorProfile.bind(controller));
export {router as VendorRoute}