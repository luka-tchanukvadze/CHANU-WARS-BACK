import { User } from "../models/userModel.js";
import { getAll } from "./handlerFactory.js";
// import { catchAsync } from "../utils/catchAsync.js";

export const getAllUsers = getAll(User);

export const createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not definded. Please use /signup instead",
  });
};

export const getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet definded",
  });
};

export const updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet definded",
  });
};

export const deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet definded",
  });
};
