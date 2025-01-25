import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(2, 'Product name must be at least 2 characters'),
  price: z.number().positive('Price must be a positive number'),
  description: z.string().min(5, 'Description must be at least 5 characters'),
  stockQuantity: z
    .number()
    .int()
    .positive('Stock quantity must be a positive integer'),
  category: z.string().min(2, 'Category must be at least 2 characters'),
});

export type productType = z.infer<typeof productSchema>;
