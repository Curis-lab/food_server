import { injectable } from "inversify";
import { IVendorRepository } from "../interfaces/vendor";
import { Vendor, Food } from "@entities";
import {  Food as food } from "../../../../models";
import { Vendor as vendor } from "../../../infrastructure/db/mongo/models/vendor";

@injectable()
export class VendorRepository implements IVendorRepository {
  private vendor: any;
  private food: any;
  constructor() {
    this.vendor = vendor;
    this.food = food;
  }

  async deleteFood(id: string): Promise<boolean> {
    const result =  await this.food.deleteOne({_id:id});   
    return Promise.resolve(result.deletedCount === 1);
  }
  async createFood(input:any):Promise<Food>{
    const food = await this.food.create(input);
    return Promise.resolve(food);
  }
  
  create(data: any): Promise<Vendor> {
    throw new Error("Method not implemented.");
  }
  async deleteVendor(id: string): Promise<boolean> {
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
  async getFoods(): Promise<Vendor[]> {
    const foods = await this.food.find()
    return Promise.resolve(foods);
  }
}
