import { MixFoodRepository } from '@adapters/common/repositories/food.rep';
import { MixVendorRepository } from '@adapters/common/repositories/vendor.rep';
import { MixUnitOfWorkServices } from '@adapters/common/services/unit-of-work.service';

export const generateVendorGateway = MixUnitOfWorkServices(
  MixVendorRepository(MixFoodRepository(class {})),
);
