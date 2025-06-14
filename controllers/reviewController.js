import { Review } from "../models/reviewModel.js";
import { catchAsync } from "../utils/catchAsync.js";
import { createOne, getAll } from "./handlerFactory.js";

/**
 * @description These controllers use `handlerFactory.js` to keep the code neat and avoid repeating myself.
 * If you want to see more complex controller code, check out `authController.js`.
 */

export const getAllReviews = getAll(Review);
export const createNewReview = createOne(Review);
