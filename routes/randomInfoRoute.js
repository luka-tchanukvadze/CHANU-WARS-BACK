import express from "express";
import {
  getAllInfo,
  createNewInfo,
  deleteInfo,
  updateInfo,
} from "../controllers/randomInfoController.js";

const router = express.Router();

router.route("/").get(getAllInfo).post(createNewInfo);

// This is for personal use
router.route("/:id").delete(deleteInfo);
router.route("/:id").patch(updateInfo);

export default router;
