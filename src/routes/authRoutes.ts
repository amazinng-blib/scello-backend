import { Router } from 'express';
import { registerUser } from '../controllers/auth/registerController';
import { loginUser } from '../controllers/auth/loginController';

export const router = Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
