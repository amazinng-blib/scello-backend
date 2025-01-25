import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Scello backend!!');
});

const PORT = process.env.PORT ?? 55000;

app.listen(PORT, () => {
  console.log(`Server is running on http:localhost:${PORT}`);
});
