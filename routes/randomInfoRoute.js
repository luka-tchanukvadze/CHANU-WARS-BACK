import express from "express";
import {
  getAllInfo,
  createNewInfo,
  deleteInfo,
} from "../controllers/randomInfoController.js";

const router = express.Router();

router.route("/").get(getAllInfo).post(createNewInfo);
router.route("/:id").delete(deleteInfo);

export default router;
