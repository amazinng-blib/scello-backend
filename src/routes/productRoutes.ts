import { Router } from 'express';
import { adminMiddleware } from '../middleware/adminMiddleware';
import { createProductController } from '../controllers/createProductController';
import { updateProduct } from '../controllers/updateProductController';
import { deleteProduct } from '../controllers/deleteProductController';
import { fetchProducts } from '../controllers/fetchProductsController';

export const router = Router();

router.post('/create-product', adminMiddleware, createProductController);
router.put('/update-product', adminMiddleware, updateProduct);
router.delete('/delete-product', adminMiddleware, deleteProduct);
router.get('/products', fetchProducts);
