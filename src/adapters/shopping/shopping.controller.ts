import { ShoppingInteractor } from '@useCases/shopping/shopping.interactor';
import { Request, Response } from 'express';
import url from 'url';

export class ShoppingController {
  private _intearctor: any;
  constructor() {
    this._intearctor = new ShoppingInteractor();
  }
  async views(req: Request, res: Response) {
    const { query, pathname: path } = url.parse(req.url, true);
    const foods = await this._intearctor.getFoods();

    if (path === '/views') {
      if (Object.keys(query).length === 0) {
        return res.send({ message: 'simple file' });
      } else {
        /**
         * search by string and number
         * navigate by category
         * pingenation
         */
        const opts = {
          category: query.category ? String(query.category) : undefined,
          description: query.description
            ? String(query.description)
            : undefined,
          foodType: query.foodType ? String(query.foodType) : undefined,
          readyTime: query.readyTime ? Number(query.readyTime) : undefined,
          price: query.price ? Number(query.price) : undefined,
        };
        const data = foods.filter((food: any) => {
          return food.category.includes(String(query.category));
        });
        res.send(data);
      }
    }
  }
  async details(req: Request, res: Response) {
    /**
     * 10x products of recommendated
     * show and create review and rating
     * details by id
     */
  }

  async filter(req: Request, res: Response) {
    const { query, pathname } = url.parse(req.url, true);
    const { question } = <{ question: string }>req.body;

    const foods = await this._intearctor.getFoods();

    if (pathname == '/search') {
      let filters;
      if (Object.keys(query).length > 0) {
        filters = { type: query.type, q: question };
      } else {
        filters = { type: 'name', q: question };
      }
      this._intearctor.filter(filters, res);
    }
  }
}
