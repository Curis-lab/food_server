import { MixCustomerRepository } from '@adapters/common/repositories/customer.rep';
import { MixUnitOfWorkServices } from '@adapters/common/services/unit-of-work.service';

export const generateCustomerGateway = MixUnitOfWorkServices(
  MixCustomerRepository(class {}),
);
