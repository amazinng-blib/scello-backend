import { AppError } from '../../middleware/errorHandler';
import Product from '../../models/productModel';

export async function deleteProductService(productId: number): Promise<any> {
  const product = await Product.findOne({ where: { id: Number(productId) } });
  if (!product) {
    throw new AppError('Product not found', 404);
  }

  return await product.destroy();
}
