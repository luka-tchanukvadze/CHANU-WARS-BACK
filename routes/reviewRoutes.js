import express from "express";
import {
  createNewReview,
  getAllReviews,
} from "../controllers/reviewController.js";
import { protect } from "../controllers/authController.js";
// import { protect, restristTo } from "../controllers/authController.js";

const router = express.Router();

router.use(protect);

router.route("/").get(getAllReviews).post(createNewReview);

export default router;
