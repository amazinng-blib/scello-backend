import { AppError } from '../../middleware/errorHandler';
import User from '../../models/userModel';
import { type UserSchemaType } from '../../validation/userSchema';
import bcrypt from 'bcryptjs';
import validator from 'validator';

export async function registerUserService(input: UserSchemaType): Promise<any> {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(input.password, salt);

  // validate email
  if (!validator.isEmail(input.email)) {
    throw new AppError('Invalid email format', 400);
  }

  if (!validator.isStrongPassword(input.password)) {
    throw new AppError(
      'Password is too weak. Please use a stronger password with a mix of uppercase, lowercase, numbers, and special characters.',
      400
    );
  }

  // check if user already exist

  const userExist = await User.findOne({
    where: { email: input.email },
  });

  if (userExist) {
    throw new AppError('User already exists', 400);
  }

  const userData = { ...input, password: hashPassword };
  const newUser = await User.create(userData);
  const { password, ...rest } = newUser.dataValues;
  const response = {
    message: 'User registered successfully',
    user: rest,
  };

  return response;
}
