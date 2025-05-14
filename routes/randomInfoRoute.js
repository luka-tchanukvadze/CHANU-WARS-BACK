import express from "express";
import {
  getAllInfo,
  createNewInfo,
} from "../controllers/randomInfoController.js";

const router = express.Router();

router.get("/", getAllInfo);
router.post("/", createNewInfo);

export default router;
