import { MixFoodRepository } from '@adapters/common/repositories/food.rep';
import { MixUnitOfWorkServices } from '@adapters/common/services/unit-of-work.service';

export const generateShoppingGateway = MixUnitOfWorkServices(
  MixFoodRepository(class {}),
);
