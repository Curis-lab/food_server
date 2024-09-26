import { ShoppingController } from '@adapters/shopping/shopping.controller';
import { NextFunction, Router, Request, Response } from 'express';

const router = Router();

const controller = new ShoppingController();
//search
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('hello');
});
router.route('/views').get(controller.views.bind(controller));
router.route('/search').get(controller.filter.bind(controller));
//views
//veiws-details
//search
router.route('/views').get();

export { router as ShoppingRoute };
