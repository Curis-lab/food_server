import { generateShoppingGateway } from '@adapters/shopping/shopping.gateway';
import { Response } from 'express';

export class ShoppingInteractor {
  private _gateway: any;
  constructor() {
    this._gateway = new generateShoppingGateway();
  }
  async getFoods(res: Response) {
    const foods = await this._gateway.getFoods();
    return res.send(foods);
  }
  async getFoodById(id: string, res: Response) {
    const food = await this._gateway.getFoodById(id);
    return res.status(200).send(food);
  }
  async search(query: any, res: Response) {
    const data = await this._gateway.findFood(query);
    return res.send(data);
  }
  async filter(query: any, res: Response) {
    const insertFilter = { [query.type]: query.q };
    const data = await this._gateway.findFood(insertFilter);
    return res.send(data);
  }
}
