import { Request, Response } from 'express';
import { deleteProductService } from '../../services/products/deleteProductService';

export async function deleteProduct(req: Request, res: Response): Promise<any> {
  try {
    const { productId } = req.query;
    await deleteProductService(productId as unknown as number);
    return res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
