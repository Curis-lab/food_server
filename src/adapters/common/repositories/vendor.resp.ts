import { IVendorInput } from "../../../../dto";
import { IAdminRepository } from "../../../../interface/IAdminRepository";
import {  VandorDoc } from "../../../../models";

export class AdminRepository implements IAdminRepository {
  private _vendorDataMapper;
  constructor(vendor:any) {
    this._vendorDataMapper = vendor;
  }
  async deleteVandor(id: string): Promise<boolean> {
    const result = await this._vendorDataMapper.deleteOne({ _id: id });
    return result.deletedCount === 1;
  }
  async vandors(): Promise<any[]> {
    return await this._vendorDataMapper.find();
  }
  async createVandor(input: IVendorInput): Promise<VandorDoc> {
    return await this._vendorDataMapper.create(input);
  }
  async findVandor(id: string): Promise<VandorDoc | null> {
    return await this._vendorDataMapper.findById({ _id: id });
  }
  async updateVandor(id: string, data: string): Promise<VandorDoc | null> {
    const result = await this._vendorDataMapper.findByIdAndUpdate(
      { _id: id },
      { name: data },
      { new: true }
    );
    return result;
  }
}
