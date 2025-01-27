import { Router } from 'express';
import { adminMiddleware } from '../middleware/adminMiddleware';
import { createProductController } from '../controllers/products/createProductController';
import { updateProduct } from '../controllers/products/updateProductController';
import { deleteProduct } from '../controllers/products/deleteProductController';
import { fetchProducts } from '../controllers/products/fetchProductsController';
import { verifyToken } from '../middleware/verifyToken';

export const router = Router();

router.post(
  '/create-product',
  verifyToken,
  adminMiddleware,
  createProductController
);
router.put('/update-product', verifyToken, adminMiddleware, updateProduct);
router.delete('/delete-product', verifyToken, adminMiddleware, deleteProduct);
router.get('/', fetchProducts);
