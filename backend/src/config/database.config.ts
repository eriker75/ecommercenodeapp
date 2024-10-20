import "reflect-metadata";
import { DataSource } from "typeorm";
import {
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
} from "./constants.config";
import path from "path";
import { Setting } from "../models/Setting";

// Create a DataSource instance, but do not initialize it immediately
export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true, // Set false in production
  logging: false,
  entities: [path.join(__dirname, "../models/*.{ts,js}")],
  //entities: [Setting],
  migrations: [],
  subscribers: [],
});

// Singleton pattern to initialize the DataSource only once
let initialized = false;

export const initializeDatabase = async (): Promise<DataSource> => {
  if (!initialized) {
    try {
      await AppDataSource.initialize();
      console.log("Data Source has been initialized!");
      initialized = true; // Set flag to true after successful initialization
    } catch (error) {
      console.error("Error during Data Source initialization:", error);
      throw error; // Re-throw the error for error handling in main.ts
    }
  }
  return AppDataSource; // Return the initialized DataSource
};
