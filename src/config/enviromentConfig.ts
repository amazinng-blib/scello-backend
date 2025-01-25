import dotenv from 'dotenv';
dotenv.config();

export const enviromentConfig = {
  development: {
    username: process.env.DEV_DB_USERAME as string,
    password: process.env.DEV_DB_PASSWORD as string,
    database: process.env.DEV_DB_NAME as string,
    host: process.env.DEV_DB_HOST as string,
    dialect: 'postgres',
  },
  production: {
    username: process.env.PROD_DB_USERNAME as string,
    password: process.env.PROD_DB_PASSWORD as string,
    database: process.env.PROD_DB_NAME as string,
    host: process.env.PROD_DB_HOST as string,
    dialect: 'postgres',
  },
};
