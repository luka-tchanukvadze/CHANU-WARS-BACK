import express from "express";
import randomInfoRoute from "./routes/randomInfoRoute.js";
import userRoutes from "./routes/userRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

import cors from "cors";
import AppError from "./utils/appError.js";
import { globalErrorHandler } from "./controllers/errorController.js";

import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";
import cookieParser from "cookie-parser";
import compression from "compression";

const app = express();

// app.enable("trust proxy");

// Global Middlewares
// Set Security HTTP headers
app.use(helmet());

const limiter = rateLimit({
  limit: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use(limiter);

// middleware for parsing request body
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

app.use(compression());

// Test middlewareAdd commentMore actions
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  // console.log(req.cookies);

  next();
});

// Data sanitization agains XSS attacks
app.use(xss());

// Prevent parameter pollutions
app.use(hpp());

// middleware for handling CORS POLICY
const allowedOrigins = [
  "http://localhost:3000",
  "https://chanu-wars.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to my project");
});

app.use("/randomInfos", randomInfoRoute);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/reviews", reviewRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
