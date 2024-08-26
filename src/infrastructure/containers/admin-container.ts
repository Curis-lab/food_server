import { Container } from "inversify";
import { AdminController } from "../../adapters/admin/admin.controller";
import { AdminCollection } from "../collections/admin-collection";
import { AdminRepository } from "../../adapters/common/repositories/admin.rep";
import { AdminInteractor } from "../../use-cases/admin/admin.interactor";
import { IAdminRepository } from "../../adapters/common/interfaces/admin";
import { admin_types } from "../../use-cases/utils/jd-const";
import AdminGateway from '../../use-cases/admin/admin.gateway';
import AdminPresenter from "../../adapters/admin/admin.presenter";

export const ADMIN_TYPES = {
  AdminInteractor: Symbol.for("AdminInteractor"),
  AdminController: Symbol.for("AdminController"),
};

export function adminLoadContainer() {
  const container = new Container();
  container
    .bind<IAdminRepository>(admin_types.adminrespository)
    .to(AdminRepository);
  container.bind<AdminGateway>(admin_types.admininteractor).to(AdminInteractor);
  container.bind(admin_types.adminpresenter).to(AdminPresenter);
  container.bind(admin_types.admincontroller).to(AdminController);
  container.bind(AdminCollection).toSelf();
  return container;
}
