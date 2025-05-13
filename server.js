import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./config.env" });

const mongoDBURL = process.env.MONGO_URL;

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is listening to port: ${port}`);
});
