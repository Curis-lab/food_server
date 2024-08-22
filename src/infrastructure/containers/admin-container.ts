import { Container } from "inversify";
import { AdminController } from "../../adapters/admin/admin.controller";
import { AdminCollection } from "../collections/admin-collection";

const ADMIN_TYPES = {
  FunctionRegistry: Symbol.for("FunctionRegistry"),
  AdminController: Symbol.for("AdminController"),
};

export function adminLoadContainer() {
  const container = new Container();
  container.bind<AdminController>(ADMIN_TYPES.AdminController).to(AdminController);
  container.bind<AdminCollection>(AdminCollection).toSelf();
  return container;
}
