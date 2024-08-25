import { injectable } from "inversify";
import { IVendorRepository } from "../interfaces/vendor";
import { Vendor, Food } from "@entities";
import { Vandor, Food as food } from "../../../../models";

@injectable()
export class VendorRepository implements IVendorRepository {
  private vendor: any;
  private food: any;
  constructor() {
    this.vendor = Vandor;
    this.food = food;
  }
  create(data: any): Promise<Vendor> {
    throw new Error("Method not implemented.");
  }
  async deleteVendor(id: string): Promise<boolean> {
    // const result = await this.vendor.deleteOne({ _id: id });
    console.log(id);
    return Promise.resolve(true);
  }
  update(id: string): Promise<Vendor> {
    throw new Error("Method not implemented.");
  }
  async findByEmail(email: string): Promise<Vendor> {
    const data = await this.vendor.findOne({ email });
    if (data) {
      return Promise.resolve(data);
    } else {
      throw new Error("Method not implemented.");
    }
  }
  async findById(id: string): Promise<Vendor> {
    const data = await this.vendor.findById(id);
    if (data) {
      return Promise.resolve(data);
    } else {
      throw new Error("Method not implemented.");
    }
  }
  getAll(): Promise<Vendor[]> {
    throw new Error("Method not implemented.");
  }
  async createFood(data: any): Promise<Food> {
    const food = await this.food.create(data);
    return Promise.resolve(food);
  }
}
