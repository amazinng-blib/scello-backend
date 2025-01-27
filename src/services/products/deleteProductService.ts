import { AppError } from '../../middleware/errorHandler';
import Product from '../../models/productModel';

export async function deleteProductService(productId: number): Promise<any> {
  try {
    const product = await Product.findOne({ where: { id: Number(productId) } });
    if (!product) {
      throw new AppError('Product not found', 404);
    }

    await product.destroy();
    return;
  } catch (error: any) {
    throw new AppError('Error deleting product: ' + error.message, 500);
  }
}
