import { Request, Response } from 'express';
import { deleteProductService } from '../services/deleteProductService';

export async function deleteProduct(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { productId } = req.query;
    await deleteProductService(productId as unknown as number);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error: any) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
