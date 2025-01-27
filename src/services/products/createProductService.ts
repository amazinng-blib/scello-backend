import Product from '../../models/productModel';
import { type productType } from '../../validation/productSchema';
import { updateProductService } from './updateProductService';

export async function createProductService(payload: productType): Promise<any> {
  /* first, check if the product already exist.
   * if the product exist, and it's out of stock, increase the product stock quantity
   **/
  const { name, category } = payload;
  const existingProduct = await Product.findOne({
    where: { name, category },
  });

  if (existingProduct) {
    return await updateProductService(payload);
  }
  const result = await Product.create(payload);

  const response = {
    message: 'Product created successfully',
    data: result,
  };

  return response;
}
