import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import mongoose from "mongoose";
import app from "./app.js";

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! shutting down...");
  console.log(err.name, err.message);

  process.exit();
});

const mongoDBURL = process.env.MONGO_URL;

// Must not reject unhandled: the handler below exits the process, which would
// take down every route (including /api/health) whenever the DB is unreachable.
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to database");
  })
  .catch((err) => {
    console.log("DB connection failed:", err.message);
  });

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
  console.log(`app is listening to port: ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
