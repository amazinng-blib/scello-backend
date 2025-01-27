import { AppError } from '../../middleware/errorHandler';
import Product from '../../models/productModel';
import { type updateProductType } from '../../validation/productSchema';

export async function updateProductService(
  payload: updateProductType
): Promise<any> {
  const { name, category, id } = payload;

  let where: any = {};
  if (id) where.id = id;
  if (name) where.name = name;
  if (category) where.category = category;
  const productExist = await Product.findOne(where);
  console.log(payload);

  if (!productExist) {
    throw new AppError('Product not found', 404);
  }

  // update the product details
  const result = await productExist.update({
    ...payload,
    stockQuantity:
      productExist.stockQuantity +
      (payload.stockQuantity ? payload.stockQuantity : 0),
  });

  const response = {
    message: 'Product updated successfully',
    data: result,
  };

  return response;
}
