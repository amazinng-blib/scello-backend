import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const generateAccessToken = async (id: string): Promise<string> => {
  try {
    const accessToken = jwt.sign(
      { id },
      process.env.ACCESS_TOKEN_SECRET as Secret,
      { expiresIn: '7d' }
    );

    return accessToken;
  } catch (error: any) {
    console.log('Error from Generate token', error);
    return Promise.reject('Some error occured');
  }
};
