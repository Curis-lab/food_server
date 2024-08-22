import { inject, injectable } from "inversify";
import {  AdminController } from "../../adapters/admin/admin.controller";
import { ADMIN_TYPES } from "../containers/admin-container";


@injectable()
export class AdminCollection {
  constructor(
    @inject(ADMIN_TYPES.AdminController) private adminController: AdminController,
  ) {}
  callFunctionByName(functionName: string, ...args: any[]): any {
    const register: Record<string, (...args: any[]) => any> = {
      createVendor: () => this.adminController.onCreateVendor(),
    };

    //returning of the data too cohesion
    return register[functionName] && args
      ? register[functionName](...args)
      : "Function not found";
  }
}