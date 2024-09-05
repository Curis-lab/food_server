import { MixVendorRepository } from "@adapters/common/repositories/admin.rep";
import { MixCustomerRepo } from "@adapters/common/repositories/customer.rep";
import { MixUnitOfWorkServices } from "@adapters/common/services/unit-of-work.service";

class GenerateAdminGateway {
  public vendorRepo: any;
  public customerRepo: any;
  constructor(mixVendorRepo: any, mixCustomerRepo: any) {
    this.vendorRepo = mixVendorRepo;
    this.customerRepo = mixCustomerRepo;
  }
  async findVendorByEmail(email: string) {
    return await this.vendorRepo.findByEmail(email);
  }
  async getAllCustomers() {
    return await this.customerRepo.getAllCustomers();
  }
}

export const generateAdminGateway = MixUnitOfWorkServices(
  MixVendorRepository(MixCustomerRepo(MixCustomerRepo(class {})))
);
