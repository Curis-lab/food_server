import VendorPersistenceData from '../models/vendor-persistence-data';

export interface AbstractDataMapper<Model> {
  findById(id: number | string): Promise<Model>;
  insert(model: Model): Promise<void>;
  bluckInsert(models: Model[]): Promise<void>;
  updateById(id: number | string, data: Partial<Model>): Promise<Model>;
}

export interface VendorDataMapper
  extends AbstractDataMapper<VendorPersistenceData> {}
