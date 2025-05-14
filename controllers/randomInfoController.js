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
    response.status(500).send({ message: error.message });
  }
};
