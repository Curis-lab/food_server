import { Food } from '../models/food';

export interface IFood {
  createFood(input: any): Promise<Food>;
}
