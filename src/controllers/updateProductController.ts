import { Request, Response } from 'express';
import { productSchema } from '../validation/productSchema';
import { updateProductService } from '../services/updateProductService';

export async function updateProduct(req: Request, res: Response): Promise<any> {
  try {
    const parsedData = productSchema.parse(req.body);
    const product = await updateProductService(parsedData);
    return res.status(200).json({
      message: 'Product updated successfully',
      data: product,
    });
  } catch (error: any) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
