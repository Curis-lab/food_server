import { inject, injectable } from 'inversify';
import { AdminController } from '@adapters/admin/admin.controller';
import { admin_types } from '@useCases/utils/jd-const';

@injectable()
export class AdminCollection {
  constructor(
    @inject(admin_types.admincontroller)
    private adminController: AdminController,
  ) {}
  callFunctionByName(functionName: string, ...args: any[]): any {
    const register: Record<string, (...args: any[]) => any> = {
      createVendor: (req, res) => this.adminController.onCreateVendor(req, res),
      fetchAllVendors: (req, res) =>
        this.adminController.onGetVendors(req, res),
      deleteVendor: (req, res) =>
        this.adminController.onDeleteVendorById(req, res),
      updateVendor: (req, res) => this.adminController.onUpdateVendor(req, res),
      findVendorById: (req, res) =>
        this.adminController.onGetVendorById(req, res),
      viewAllCustomers: (req, res) =>
        this.adminController.viewCustomers(req, res),
    };

    return register[functionName] && args
      ? register[functionName](...args)
      : 'Function not found';
  }
}
