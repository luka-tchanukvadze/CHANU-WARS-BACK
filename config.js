export const PORT = 5555;
import dotenv from "dotenv";
dotenv.config();
export const mongoDBURL = process.env.MONGO_URL;
