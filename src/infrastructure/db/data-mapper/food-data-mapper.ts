import { FoodPersistenceData } from '@adapters/common/models/food-persistence-data';
import DataMapper from '../data-mapper';
import { FoodDataMapper } from '@adapters/common/interfaces/data-mappers';
import { Types } from 'mongoose';
export default class MongooseFoodDataMapper
  extends DataMapper<FoodPersistenceData>
  implements FoodDataMapper
{
  constructor(food: any) {
    super(food);
  }
  async foodListByIds(ids: Types.ObjectId[]): Promise<any> {
    const foods: any[] = await this.database.find({
      _id: { $in: ids },
    });
    return Promise.resolve(foods);
  }
  async delete(id: string): Promise<Boolean> {
    const deleted = await this.database.deleteOne({ _id: id });
    return Promise.resolve(deleted.deletedCount === 1);
  }
}
