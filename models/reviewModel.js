import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "Review can not be empty!"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    user: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Review must belong to a user"],
      },
    ],
    faction: {
      type: String,
      enum: ["jedi", "sith"],
      default: "jedi",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.index({ user: 1 }, { unique: true });

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name",
  });

  next();
});

export const Review = mongoose.model("Review", reviewSchema);
