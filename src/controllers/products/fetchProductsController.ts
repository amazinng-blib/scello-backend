import { Request, Response } from 'express';
import { fetchProductService } from '../../services/products/fetchProductService';

export async function fetchProducts(req: Request, res: Response): Promise<any> {
  try {
    const page = Number.parseInt(req.query.page as string) ?? 1;
    const limit = Number.parseInt(req.query.limit as string) ?? 10;
    const { category, maxPrice, minPrice, search, sortBy, sortOrder } =
      req.query;

    const products = await fetchProductService({
      page,
      limit,
      category: category as string,
      maxPrice: maxPrice ? Number.parseInt(maxPrice as string) : undefined,
      minPrice: minPrice ? Number.parseInt(minPrice as string) : undefined,
      search: search as string,
      sortBy: sortBy as string,
      sortOrder: sortOrder as string,
    });

    return res.status(200).json(products);
  } catch (error: any) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
