import { RandomInfo } from "../models/RandomInfoModel.js";

export const getAllInfo = async (req, res) => {
  try {
    const infos = await RandomInfo.find({});

    res.status(200).json({
      status: "success",
      result: infos.length,
      body: infos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export const createNewInfo = async (req, res) => {
  try {
    const newInfo = await RandomInfo.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        info: newInfo,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};
