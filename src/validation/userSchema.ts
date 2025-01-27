import { z } from 'zod';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MARKETER = 'MARKETER',
}

export const UserSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  role: z.nativeEnum(Role).default(Role.USER),
  createdAt: z.date().optional(),
});

export type UserSchemaType = z.infer<typeof UserSchema>;

export const LoginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
