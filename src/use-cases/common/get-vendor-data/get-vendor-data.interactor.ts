import { IVendorInput } from "../../../../dto";
import { IAdminInteractor } from "../../../../interface/IAdminInteractor";
import { IAdminRepository } from "../../../../interface/IAdminRepository";
import { VandorDoc } from "../../../../models";

export class AdminInteractor implements IAdminInteractor {
  private _gateway: IAdminRepository;

  constructor(repository: IAdminRepository) {
    this._gateway = repository;
  }

  async vandorById(id: string): Promise<VandorDoc | null> {
    const vandors = await this._gateway.findVandor(id);
    return vandors;
  }
  async allVandors(): Promise<VandorDoc[]> {
    const vandors = await this._gateway.vandors();
    if (vandors) {
      vandors.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
      return vandors;
    } else {
      return [];
    }
  }
  async deleteVandor(id: string): Promise<boolean> {
    const deleted = await this._gateway.deleteVandor(id);
    if (deleted) {
      return true;
    } else {
      return false;
    }
  }
  async createVandor(input: IVendorInput): Promise<VandorDoc> {
    const vendor = await this._gateway.createVandor(input);
    if (vendor) {
      return vendor;
    } else {
      throw new Error("Error while creating vandor");
    }
  }
  async updateVandor(id: string, input: string): Promise<VandorDoc> {
    const updated = await this._gateway.updateVandor(id, input);
    if (updated) {
      return updated;
    } else {
      throw new Error("Error while updating vandor");
    }
  }
}
