import { MixVendorRepository } from '@adapters/common/repositories/vendor.resp';
import { MixUnitOfWorkServices } from '@adapters/common/services/unit-of-work.service';

export const generateVendorGateway = MixUnitOfWorkServices(
  MixVendorRepository(class {}),
);
