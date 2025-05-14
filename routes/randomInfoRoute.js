import express from "express";
import { RandomInfo } from "../models/RandomInfoModel.js";
import { getAllInfo } from "../controllers/randomInfoController.js";

const router = express.Router();

// Route for Save a new RandomInfo
router.post("/", async (request, response) => {
  try {
    if (!request.body.title || !request.body.info) {
      return response.status(400).send({
        message: "send all required fields: title, info",
      });
    }

    const newInfo = {
      title: request.body.title,
      info: request.body.info,
    };

    const info = await RandomInfo.create(newInfo);

    return response.status(201).send(info);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get all books from database
router.get("/", getAllInfo);

// // Uncomment and implement other routes as needed
// // Example for Get info by ID
// router.get("/:id", async (request, response) => {
//   try {
//     const { id } = request.params;
//     const info = await RandomInfo.findById(id);

//     if (!info) {
//       return response.status(404).json({ message: "Info not found" });
//     }

//     return response.status(200).json(info);
//   } catch (error) {
//     console.log(error);
//     response.status(500).send({ message: error.message });
//   }
// });

// // Example for Delete info
// router.delete("/:id", async (request, response) => {
//   try {
//     const { id } = request.params;

//     const result = await RandomInfo.findByIdAndDelete(id);

//     if (!result) {
//       return response.status(404).json({ message: "Info not found" });
//     }

//     return response.status(200).json({ message: "Info deleted successfully" });
//   } catch (error) {
//     console.log(error);
//     response.status(500).send({ message: error.message });
//   }
// });

export default router;
