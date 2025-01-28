import { AppError } from '../../middleware/errorHandler';
import User from '../../models/userModel';
import { generateAccessToken } from '../../utils/generateToken';
import { type LoginSchemaType } from '../../validation/userSchema';
import bcrypt from 'bcryptjs';

export async function loginService(input: LoginSchemaType): Promise<any> {
  const user = await User.findOne({ where: { email: input.email } });
  if (!user) {
    throw new AppError('User not found', 400);
  }

  const passwordMatch = await bcrypt.compare(input.password, user.password);
  if (!passwordMatch) {
    throw new AppError('Wrong credentials', 400);
  }

  const accessToken = await generateAccessToken(user);
  const { password, ...rest } = user.dataValues;
  return { message: 'Logged in successfully', accessToken, user: rest };
}
