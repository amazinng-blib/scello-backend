import { Request, Response } from 'express';
import { productSchema } from '../../validation/productSchema';
import { createProductService } from '../../services/products/createProductService';
import { handleError } from '../../utils/handleError';

export async function createProductController(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const parsedData = productSchema.parse({
      ...req.body,
      creator: req.body.userId,
    });
    const newProduct = await createProductService(parsedData);
    return res.status(201).json(newProduct);
  } catch (error: any) {
    handleError(error, res);
  }
}
