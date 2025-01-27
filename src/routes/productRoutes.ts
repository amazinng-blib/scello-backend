import { Router } from 'express';
import { adminMiddleware } from '../middleware/adminMiddleware';
import { createProductController } from '../controllers/products/createProductController';
import { updateProduct } from '../controllers/products/updateProductController';
import { deleteProduct } from '../controllers/products/deleteProductController';
import { fetchProducts } from '../controllers/products/fetchProductsController';

export const router = Router();

router.post('/create-product', adminMiddleware, createProductController);
router.put('/update-product', adminMiddleware, updateProduct);
router.delete('/delete-product', adminMiddleware, deleteProduct);
router.get('/products', fetchProducts);
