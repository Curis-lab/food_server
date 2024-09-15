import { MixCustomerRepo } from '@adapters/common/repositories/customer.rep';
import { MixVendorRepository } from '@adapters/common/repositories/vendor.resp';
import { MixUnitOfWorkServices } from '@adapters/common/services/unit-of-work.service';

export const generateAdminGateway = MixUnitOfWorkServices(MixVendorRepository(MixCustomerRepo(class {})));
