import express from "express";
import {
  getAllInfo,
  createNewInfo,
} from "../controllers/randomInfoController.js";
import { protect } from "../controllers/authController.js";

const router = express.Router();

router.route("/").get(getAllInfo).post(createNewInfo);

export default router;
