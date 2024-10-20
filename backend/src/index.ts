import express, { Request, Response } from "express";
import { initializeDatabase } from "./config/database.config";

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    hello: "world!!!!!!!"
  });
});

// Main async function to initialize the database and start the server
async function main() {
  try {
    // Initialize the database
    await initializeDatabase();

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error during server initialization:", error);
  }
}

// Execute the main function
main();
