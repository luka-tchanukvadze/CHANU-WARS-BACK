import express from "express";
import randomInfoRoute from "./routes/randomInfoRoute.js";
import cors from "cors";
import AppError from "./utils/appError.js";
import { globalErrorHandler } from "./controllers/errorController.js";
const app = express();

// middleware for parsing request body
app.use(express.json());

// middleware for handling CORS POLICY
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to my project");
});

app.use("/randomInfos", randomInfoRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
