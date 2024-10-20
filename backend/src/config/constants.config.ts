import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const NODE_ENV = 'development';

export const DB_HOST = process.env.DB_HOST || 'postgres';
export const DB_PORT = Number(process.env.POSTGRES_EXT_PORT) || 5432;
export const DB_USERNAME = process.env.POSTGRES_USER || 'your_username';
export const DB_PASSWORD = process.env.POSTGRES_PASSWORD || 'your_password';
export const DB_NAME = process.env.POSTGRES_DB || 'your_database_name';
