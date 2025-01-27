import express, { Request, Response } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler';
import { notFoundHandler } from './middleware/notFound';
const path = require('path');

dotenv.config();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    status: 429,
    message: 'Too many requests, please try again later',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const app = express();
app.use(limiter);
app.use(express.json());
app.use(cors());

// routes

import { router as authRoutes } from './routes/authRoutes';
import { router as ProductRoutes } from './routes/productRoutes';

app.use('/api/v1/users', authRoutes);
app.use('/api/v1/products', ProductRoutes);

// Serve Swagger UI at /api-docs endpoint

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { swaggerOptions } from './swagger/swagger-options';

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use(
  express.static(path.join(__dirname, 'node_modules', 'swagger-ui-dist'))
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Scello backend!!');
});

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT ?? 55000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
