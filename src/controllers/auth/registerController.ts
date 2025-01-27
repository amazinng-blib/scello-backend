import { Request, Response } from 'express';
import { UserSchema } from '../../validation/userSchema';
import { registerUserService } from '../../services/auth/registerService';
import { handleError } from '../../utils/handleError';

export async function registerUser(req: Request, res: Response): Promise<any> {
  try {
    const requestData = UserSchema.parse(req.body);
    const response = await registerUserService(requestData);
    return res.status(201).json(response);
  } catch (error: any) {
    handleError(error, res);
  }
}
