import { Request, Response } from 'express';
import { productSchema } from '../validation/productSchema';
import { createProduct } from '../services/createProductService';

export async function createProductController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const parsedData = productSchema.parse(req.body);
    const newProduct = await createProduct(parsedData);
    res.status(201).json({
      message: 'Product created successfully',
      data: newProduct,
    });
  } catch (error: any) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
