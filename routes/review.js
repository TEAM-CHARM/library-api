import { Router } from "express";
import { deleteOneReview, getAllReviews, getOneReview, postAllReviews, updateReview } from "../controllers/review.js";


export const reviewRouter = Router()
reviewRouter.get('/review', getAllReviews)
reviewRouter.get('/review/:id', getOneReview)
reviewRouter.post('/review', postAllReviews)
reviewRouter.patch('/review/:id', updateReview)
reviewRouter.delete('/review/:id', deleteOneReview)