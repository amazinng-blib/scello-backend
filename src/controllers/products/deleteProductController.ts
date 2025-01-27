import { Request, Response } from 'express';
import { deleteProductService } from '../../services/products/deleteProductService';
import { handleError } from '../../utils/handleError';

export async function deleteProduct(req: Request, res: Response): Promise<any> {
  try {
    const { productId } = req.query;
    await deleteProductService(productId as unknown as number);
    return res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error: any) {
    handleError(error, res);
  }
}
