import { Request, Response } from 'express';
import { productSchema } from '../../validation/productSchema';
import { createProductService } from '../../services/products/createProductService';
import { ZodError } from 'zod';

export async function createProductController(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const parsedData = productSchema.parse(req.body);
    const newProduct = await createProductService(parsedData);
    return res.status(201).json({
      message: 'Product created successfully',
      data: newProduct,
    });
  } catch (error: any) {
    if (error instanceof ZodError) {
      res
        .status(400)
        .json({ error: 'Please make sure you provide right input' });
      console.log('zodError', error.message);
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
