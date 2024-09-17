import MongooseFoodDataMapper from '@infrastructure/db/data-mapper/food-data-mapper';
import { Food } from '@infrastructure/db/mongo/models/food';
import mongoose, { Types } from 'mongoose';
import { FoodDataMapper } from '../interfaces/data-mappers';

type GConstructor<T = {}> = new (...args: any[]) => T;

export function MixFoodRepository<TBase extends GConstructor>(
  baseClass: TBase,
) {
  return class extends baseClass {
    private _mapper: FoodDataMapper;
    constructor(...args: any[]) {
      super(...args);
      this._mapper = new MongooseFoodDataMapper(Food);
    }
    async addFood(input: any): Promise<any> {
      const food = await this._mapper.insert(input);
      return Promise.resolve(food);
    }
    async getFoodByIds(ids: string[]): Promise<any> {
      const objectIds = ids.map((id) => new mongoose.Types.ObjectId(id));
      const foods = await this._mapper.foodListByIds(objectIds);
      return Promise.resolve(foods);
    }
    async deleteFoodById(id: string): Promise<Boolean> {
      return await this._mapper
        .delete(id)
        .then((data: any) => Promise.resolve(data))
        .catch((err: any) => Promise.resolve(false));
    }
    async getFoodById(id: string): Promise<any> {
      const food = await this._mapper.findById(id);
      return Promise.resolve(food);
    }
  };
}
