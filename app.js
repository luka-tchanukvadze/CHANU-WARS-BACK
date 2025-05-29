import express from "express";
import randomInfoRoute from "./routes/randomInfoRoute.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import AppError from "./utils/appError.js";
import { globalErrorHandler } from "./controllers/errorController.js";

import rateLimit from "express-rate-limit";
import helmet from "helmet";

const app = express();
// Global Middlewares
// Set Security HTTP headers
app.use(helmet());

const limiter = rateLimit({
  limit: 50,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use(limiter);

// middleware for parsing request body
app.use(express.json());

// middleware for handling CORS POLICY
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to my project");
});

app.use("/randomInfos", randomInfoRoute);
app.use("/api/v1/users", userRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
