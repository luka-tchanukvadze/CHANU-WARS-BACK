import express from "express";
import {
  getAllInfo,
  createNewInfo,
  deleteInfo,
  updateInfo,
} from "../controllers/randomInfoController.js";
import { protect } from "../controllers/authController.js";

const router = express.Router();

router.route("/").get(getAllInfo).post(createNewInfo);

// These endpoints are for personal use, not integrated into the frontend
router.route("/:id").delete(protect, deleteInfo);
router.route("/:id").patch(updateInfo);

export default router;
