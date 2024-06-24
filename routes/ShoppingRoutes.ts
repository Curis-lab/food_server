import express from 'express';
import { GetFoodAvailablity, GetFoodUnder30Min, GetTopRestruent, RestaurantById, SearchFoods } from '../controllers/ShoppingController';

const router = express.Router();

router.get('/:pincode',GetFoodAvailablity);

router.get('/top-restaurants/:pincode',GetTopRestruent);

router.get('/food-in-30-min/:pincode', GetFoodUnder30Min);

router.get('/search/:pincode',SearchFoods);

router.get('/restaurant/:id',RestaurantById);

export {router as ShoppingRoute};