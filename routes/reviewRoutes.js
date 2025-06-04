import express from "express";
import {
  createNewReview,
  getAllReviews,
} from "../controllers/reviewController.js";
import { protect, restristTo } from "../controllers/authController.js";

const router = express.Router();

router
  .route("/")
  .get(getAllReviews)
  .post(protect, restristTo("user"), createNewReview);

export default router;
