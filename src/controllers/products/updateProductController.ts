import { Request, Response } from 'express';
import { updateProductSchema } from '../../validation/productSchema';
import { updateProductService } from '../../services/products/updateProductService';
import { handleError } from '../../utils/handleError';

export async function updateProduct(req: Request, res: Response): Promise<any> {
  try {
    const parsedData = updateProductSchema.parse({
      ...req.body,
      id: Number(req.query.productId),
    });

    const product = await updateProductService(parsedData);
    return res.status(200).json(product);
  } catch (error: any) {
    handleError(error, res);
  }
}
