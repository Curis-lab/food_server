import { inject, injectable } from "inversify";
import { ADMIN_TYPES } from "../infrastructure/containers/admin-container";
import { AdminRepository } from "../adapters/common/repositories/admin.rep";

@injectable()
export class AdminInteractor {
  private _adminRepository: any;
  constructor(
  ) {
  }
}
