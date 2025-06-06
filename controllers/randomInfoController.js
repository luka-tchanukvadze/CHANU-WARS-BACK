import { RandomInfo } from "../models/RandomInfoModel.js";
import { catchAsync } from "../utils/catchAsync.js";
import { deleteOne } from "./handlerFactory.js";

export const getAllInfo = catchAsync(async (req, res) => {
  const infos = await RandomInfo.find({});

  res.status(200).json({
    status: "success",
    result: infos.length,
    body: infos,
  });
});

export const createNewInfo = catchAsync(async (req, res) => {
  const newInfo = await RandomInfo.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      info: newInfo,
    },
  });
});

export const deleteInfo = deleteOne(RandomInfo);
