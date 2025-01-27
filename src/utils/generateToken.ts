import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserType } from '../models/userModel';
dotenv.config();

export const generateAccessToken = async (user: UserType): Promise<string> => {
  const payload = { id: user.id };
  try {
    const accessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET as Secret,
      { expiresIn: '7d' }
    );

    return accessToken;
  } catch (error: any) {
    console.log('Error from Generate token', error);
    return Promise.reject('Some error occured');
  }
};
