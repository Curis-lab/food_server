import { MixCustomerRepository } from '@adapters/common/repositories/customer.rep';
import { MixVendorRepository } from '@adapters/common/repositories/vendor.rep';
import { MixUnitOfWorkServices } from '@adapters/common/services/unit-of-work.service';

export const generateAdminGateway = MixUnitOfWorkServices(
  MixVendorRepository(MixCustomerRepository(class {})),
);
