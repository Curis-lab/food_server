import { Container } from "inversify";
import { AdminController } from "../../adapters/admin/admin.controller";
import { AdminCollection } from "../collections/admin-collection";
import { AdminRepository } from "../../adapters/common/repositories/admin.rep";
import { AdminInteractor } from "../../use-cases/admin/admin.interactor";
import { IAdminRepository } from "../../adapters/common/interfaces/admin";
import { admin_types } from "../../use-cases/utils/jd-const";
import AdminPresenter from "../../adapters/admin/admin.presenter";
import {IAdminInteractor} from "../../use-cases/admin/admin.gateway";


export function adminLoadContainer() {
  const container = new Container();
  container
    .bind<IAdminRepository>(admin_types.adminrespository)
    .to(AdminRepository);
  container.bind<IAdminInteractor>(admin_types.admininteractor).to(AdminInteractor);
  container.bind(admin_types.adminpresenter).to(AdminPresenter);
  container.bind(admin_types.admincontroller).to(AdminController);
  container.bind(AdminCollection).toSelf();
  return container;
}
