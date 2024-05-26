import express from 'express';
import { GetFoodAvailablity, GetFoodUnder30Min, GetTopRestruent, RestaurantById, SearchFoods } from '../controllers/ShoppingController';

const router = express.Router();

/**------ Food Availability----------- */
router.get('/:pincode',GetFoodAvailablity);

/** ----------Top Restaurants----------- */
router.get('/top-restaurants/:pincode',GetTopRestruent);

/**------Food Available in 30 Minutes------ */
router.get('/food-in-30-min/:pincode', GetFoodUnder30Min);


/**---- Search Foods------ */
router.get('/search/:pincode',SearchFoods);

/**------- Find Restaurant By ID -------- */
router.get('/restaurant/:id',RestaurantById);

export {router as ShoppingRoute};