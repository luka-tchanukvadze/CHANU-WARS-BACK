import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/userController";
import { User } from "../models/userModel";
import express from "express";

const router = express.Router();

router.post("/signup", signup);

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
