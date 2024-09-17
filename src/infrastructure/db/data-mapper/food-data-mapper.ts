import { FoodPersistenceData } from '@adapters/common/models/food-persistence-data';
import DataMapper from '../data-mapper';

export default class FoodDataMapper extends DataMapper<FoodPersistenceData> {
  constructor(food: any) {
    super(food);
  }
  async foodListByIds(ids: string[]): Promise<any> {
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
