import express from 'express';
import { ShoppingController } from '../controllers/ShoppingController';
import { ShoppingRepository } from '../repositories/shoppingRepository';

const router = express.Router();
const repository = new ShoppingRepository();

const controllers = new ShoppingController();

router.get('/:pincode',controllers.GetFoodAvailablity.bind(controllers));

router.get('/top-restaurants/:pincode',controllers.GetTopRestruent.bind(controllers));

router.get('/food-in-30-min/:pincode', controllers.GetFoodUnder30Min.bind(controllers));

router.get('/search/:pincode',controllers.SearchFoods.bind(controllers));

router.get('/restaurant/:id',controllers.RestaurantById);

export {router as ShoppingRoute};