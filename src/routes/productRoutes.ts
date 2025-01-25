import { Router } from 'express';
import { adminMiddleware } from '../middleware/adminMiddleware';
import { createProductController } from '../controllers/createProductController';

export const router = Router();

router.post('/create-product', adminMiddleware, createProductController);
