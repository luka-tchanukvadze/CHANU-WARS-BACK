import express from "express";
import {
  getAllInfo,
  createNewInfo,
} from "../controllers/randomInfoController.js";

const router = express.Router();

router.route("/").get(getAllInfo).post(createNewInfo);

export default router;
