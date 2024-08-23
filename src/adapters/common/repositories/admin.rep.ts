import { injectable } from "inversify";
import { IAdminRepository } from "../interfaces/admin";
import { Vendor } from "../models/vendor";

@injectable()
export class AdminRepository implements IAdminRepository{
  constructor(){
    
  }
  create(data: any): Promise<Vendor> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): null {
    throw new Error("Method not implemented.");
  }
  update(id: string): Promise<Vendor> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<Vendor> {
    throw new Error("Method not implemented.");
  }
}
