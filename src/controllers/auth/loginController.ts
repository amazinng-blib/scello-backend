import { Request, Response } from 'express';
import { LoginSchema } from '../../validation/userSchema';
import { loginService } from '../../services/auth/loginService';
import { handleError } from '../../utils/handleError';

export async function loginUser(req: Request, res: Response): Promise<any> {
  try {
    const requestData = LoginSchema.parse(req.body);
    const response = await loginService(requestData);
    return res.status(200).json(response);
  } catch (error: any) {
    handleError(error, res);
  }
}
