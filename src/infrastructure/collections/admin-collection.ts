import { inject, injectable } from "inversify";
import { ADMIN_TYPES, AdminController } from "../../adapters/admin/admin.controller";


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