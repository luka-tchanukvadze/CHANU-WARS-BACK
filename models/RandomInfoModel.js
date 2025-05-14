import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "An info must have a title"],
      trim: true,
    },
    info: {
      type: String,
      required: [true, "An info must have a story"],
      trim: true,
    },
  },
  { timestamps: true }
);

export const RandomInfo = mongoose.model("RandomInfo", bookSchema);
