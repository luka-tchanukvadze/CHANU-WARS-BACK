import { User } from "../models/userModel.js";
import { getAll, getOne } from "./handlerFactory.js";
// import { catchAsync } from "../utils/catchAsync.js";

export const getAllUsers = getAll(User);
export const getUser = getOne(User);

export const getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

////
export const createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not definded. Please use /signup instead",
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
