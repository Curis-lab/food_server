import express from 'express';
import { CreateVandor, GetVandorById, GetVandors } from '../controllers/AdminController';

const router = express.Router();

router.post('/vandor',CreateVandor);
router.get('/vandors', GetVandors);
router.get('/vandor/:id',GetVandorById);


export {router as AdminRoute}