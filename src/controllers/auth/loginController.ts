import { Request, Response } from 'express';
import { ZodError } from 'zod';
import { LoginSchema } from '../../validation/userSchema';
import { loginService } from '../../services/auth/loginService';

export async function loginUser(req: Request, res: Response): Promise<any> {
  try {
    const requestData = LoginSchema.parse(req.body);
    const response = await loginService(requestData);
    return res.status(200).json(response);
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
