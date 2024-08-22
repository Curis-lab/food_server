import { Container } from "inversify";
import { AdminController } from "../../adapters/admin/admin.controller";
import { AdminCollection } from "../collections/admin-collection";
import { AdminRepository } from "../../adapters/common/repositories/admin.rep";
import { AdminInteractor } from "../../use-cases/admin.interactor";

export const ADMIN_TYPES = {
  // FunctionRegistry: Symbol.for("FunctionRegistry"),
  AdminInteractor: Symbol.for("AdminInteractor"),
  AdminController: Symbol.for("AdminController"),
};

export function adminLoadContainer() {
  const container = new Container();
  // container.bind<AdminRepository>(ADMIN_TYPES.AdminRepository).to(AdminRepository);
  container.bind<AdminInteractor>(ADMIN_TYPES.AdminInteractor).to(AdminInteractor);
  container.bind<AdminController>(ADMIN_TYPES.AdminController).to(AdminController);
  container.bind<AdminCollection>(AdminCollection).toSelf();
  return container;
}

