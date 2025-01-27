import { Request, Response } from 'express';
import { ZodError } from 'zod';
import { UserSchema } from '../../validation/userSchema';
import { registerUserService } from '../../services/auth/registerService';

export async function registerUser(req: Request, res: Response): Promise<any> {
  try {
    const requestData = UserSchema.parse(req.body);
    const response = await registerUserService(requestData);
    return res.status(201).json(response);
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
