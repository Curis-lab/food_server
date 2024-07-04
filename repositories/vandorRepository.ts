import { Vandor } from "../models";

export class VandorRepository {
  private database;
  constructor() {
    this.database = Vandor;
  }
  async findVandorByEmail(email: string) {
    return await this.database.find({ email });
  }
  async findVandorById(id: string) {
    return await this.database.findById(id);
  }
}
