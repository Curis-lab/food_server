import { VandorDoc } from "../models";

export interface IVandorRepository {
  create(input: any): Promise<VandorDoc>;
  update(id: number): Promise<VandorDoc>;
  delete(id: string): Promise<VandorDoc>;
  findById(id: string): Promise<VandorDoc>;
  findAll(): Promise<VandorDoc[]>;
}
