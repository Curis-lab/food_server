import { injectable } from "inversify";
import { Vandor } from "../../../../models";
import { IVendorRepository } from "../interfaces/vendor";
import { Vendor } from "../models/vendor";

@injectable()
export class VendorRepository implements IVendorRepository {
  private client: any;
  constructor() {
    this.client = Vandor;
  }
  create(data: any): Promise<Vendor> {
    throw new Error("Method not implemented.");
  }
  delete(id: string | number): null {
    throw new Error("Method not implemented.");
  }
  update(id: string): Promise<Vendor> {
    throw new Error("Method not implemented.");
  }
  async findByEmail(email: string): Promise<Vendor> {
    const data = await this.client.findOne({ email });
    if (data) {
      return Promise.resolve(data);
    } else {
      throw new Error("Method not implemented.");
    }
  }
  async findById(id: string): Promise<Vendor> {
    const data = await this.client.findById(id);
    if (data) {
      return Promise.resolve(data);
    } else {
      throw new Error("Method not implemented.");
    }
  }
  getAll(): Promise<Vendor[]> {
    throw new Error("Method not implemented.");
  }
}
