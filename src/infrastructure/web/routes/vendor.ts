import express, { NextFunction, Request, Response } from "express";
import { Container } from "inversify";
import { INTERFACE_TYPE } from "../../container";
import { VendorInteractor } from "../../../use-cases/vendor.interactor";
import { VendorRepository } from "../../../adapters/common/repositories/vendor.rep";
import {
  IVendorInteractor,
  IVendorRepository,
} from "../../../adapters/common/interfaces/vendor";
import { VendorController } from "../../../adapters/vendor/vendor.controller";
import VendorPresenter from "../../../adapters/vendor/vendor.presenter";

const container = new Container();
container
  .bind<IVendorRepository>(INTERFACE_TYPE.VendorRepository)
  .to(VendorRepository);
container
  .bind<IVendorInteractor>(INTERFACE_TYPE.VendorInteractor)
  .to(VendorInteractor);
container.bind(INTERFACE_TYPE.VendorPresenter).to(VendorPresenter);
container.bind(INTERFACE_TYPE.VendorController).to(VendorController);

const router = express.Router();

const controller = container.get<VendorController>(
  INTERFACE_TYPE.VendorController
);

function exectuteRule(rule: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const ctrl = {
        'profile': controller.GetVendorProfile(req, res, next),
        'login': controller.VendorLogin(req, res, next)
    }
    try {
        const rule1 = `${rule}`;
      return await ctrl.profile;
    } catch (err) {
      res.status(500).json({
        name: "unexpected_failure",
        description: "Unexpected server error",
      });
    }
  };
}
router.post("/login", controller.VendorLogin.bind(controller));
router.route("/profile").get(exectuteRule("profile"));
export { router as VendorRoute };

