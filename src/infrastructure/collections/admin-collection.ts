import { inject, injectable } from "inversify";
import {  AdminController } from "@adapters/admin/admin.controller";
import { admin_types } from "../../use-cases/utils/jd-const";

@injectable()
export class AdminCollection {
  constructor(
    @inject(admin_types.admincontroller) private adminController: AdminController,
  ) {}
  callFunctionByName(functionName: string, ...args: any[]): any {
    const register: Record<string, (...args: any[]) => any> = {
      createVendor: (data:any) => this.adminController.onCreateVendor(data),
      getVendors:(res, req)=>this.adminController.onGetVendors(res, req)
    };

    return register[functionName] && args
      ? register[functionName](...args)
      : "Function not found";
  }
}