import { AbstractDataMapper } from "@adapters/common/interfaces/data-mappers";

export default class DataMapper<Model> implements AbstractDataMapper<Model> {
  public database: any;
  constructor(database: any) {
    this.database = database;
  }
  async findById(id: number | string): Promise<Model> {
    const data: Model = await this.database.findById(id);
    return Promise.resolve(data);
  }
  async insert(model: Model): Promise<void> {
    return await this.database.create(model);
  }
  async bluckInsert(models: Model[]): Promise<void> {
    return await this.database.insertMany(models);
  }
  async updateById(id: number | string, data: Partial<Model>): Promise<Model> {
    const updatedData: Model = await this.database.findByIdAndUpdate(
      { _id: id },
      { $set: data }
    );
    return Promise.resolve(updatedData);
  }
}
