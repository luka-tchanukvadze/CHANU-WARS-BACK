import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    info: { type: String, required: true },
  },
  { timestamps: true }
);

export const RandomInfo = mongoose.model("RandomInfo", bookSchema);
