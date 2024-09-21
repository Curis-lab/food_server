import { ShoppingController } from '@adapters/shopping/shopping.controller';
import { Router } from 'express';

const router = Router();

const controller = new ShoppingController();
//search
router.route('/views').get(controller.views.bind(controller));
router.route('/search').get(controller.filter.bind(controller));
//views
//veiws-details
//search
router.route('/views').get();

export { router as ShoppingRoute };
