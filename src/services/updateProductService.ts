import { AppError } from '../middleware/errorHandler';
import Product from '../models/productModel';
import { type productType } from '../validation/productSchema';

export async function updateProductService(payload: productType) {
  try {
    const { name, category } = payload;
    const productExist = await Product.findOne({
      where: { name, category },
    });

    if (!productExist) {
      throw new AppError('Product not found', 404);
    }

    // update the product details
    const result = await productExist.update(payload);
    return result;
  } catch (error: any) {
    throw new AppError('Error updating product: ' + error.message, 500);
  }
}
