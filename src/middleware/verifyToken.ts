import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = req.header('Authorization');
    if (!token) {
      res.status(401).json({ message: 'Access denied' });
      return;
    }

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    const verified = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as Secret
    ) as JwtPayload;
    req.userId = verified.id;
    next();
  } catch (error: any) {
    console.log('Token verification error', error.message);
    res.status(401).json({ message: 'Some error occurred' });
  }
};
