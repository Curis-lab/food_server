import express from 'express';
import { AdminRegi, CreateVandor, GetVandorById, GetVandors } from '../controllers/AdminController';

const router = express.Router();

// router.post('/login',AdminLogin);
router.post('/signin',AdminRegi);
router.post('/vandor',CreateVandor);
router.get('/vandors', GetVandors);
router.get('/vandor/:id',GetVandorById);


export {router as AdminRoute}