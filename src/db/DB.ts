import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { enviromentConfig } from '../config/enviromentConfig';
dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';
const databaseUrl = isProduction
  ? process.env.DATABASE_URL
  : process.env.LOCAL_DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    `Database URL is not defined in environment variables for ${
      isProduction ? 'production' : 'local'
    }`
  );
}
const config = enviromentConfig[isProduction ? 'production' : 'development'];

export const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  logging: false,
  models: [__dirname + '/models'],
  ...Object.fromEntries(
    Object.entries(config).filter(
      ([key]) => !['database', 'username', 'password', 'host'].includes(key)
    )
  ),
});

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `Database connected successfully in ${
        isProduction ? 'production' : 'development'
      } mode!`
    );
  } catch (error) {
    console.log('Error connecting to DB:', error);
  }
};

connectToDB();
