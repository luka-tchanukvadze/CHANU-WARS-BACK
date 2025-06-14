import { RandomInfo } from "../models/RandomInfoModel.js";
import { createOne, deleteOne, getAll, updateOne } from "./handlerFactory.js";
// import { catchAsync } from "../utils/catchAsync.js";

/**
 * @description These controllers use `handlerFactory.js` to keep the code neat and avoid repeating myself.
 * If you want to see more complex controller code, check out `authController.js`.
 */

export const getAllInfo = getAll(RandomInfo);
export const createNewInfo = createOne(RandomInfo);
export const updateInfo = updateOne(RandomInfo);
export const deleteInfo = deleteOne(RandomInfo);
