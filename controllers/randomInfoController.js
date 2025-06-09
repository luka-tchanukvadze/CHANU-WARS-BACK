import { RandomInfo } from "../models/RandomInfoModel.js";
import { catchAsync } from "../utils/catchAsync.js";
import { createOne, deleteOne, getAll, updateOne } from "./handlerFactory.js";

export const getAllInfo = getAll(RandomInfo);

export const createNewInfo = createOne(RandomInfo);
export const updateInfo = updateOne(RandomInfo);
export const deleteInfo = deleteOne(RandomInfo);
