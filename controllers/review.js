import { review } from "../models/review.js";


export const getAllReviews = async (req, res, next) => {
    try {
        const reviews = await review.find();
        res.status(200).json(reviews)
    } catch (error) {
        next(error)
    }
}



export const getOneReview = async (req, res, next) => {
    try {
        const id = req.params.id;
        const reviews = await review.findById(id);

        if (!Review) {
            return res.status(404).json({ msg: `Review with ID ${id} not found` });
        }

        res.status(200).json(Review);
    } catch (error) {
        next(error);
    }
};


export const postAllReviews = async (req, res, next) => {
    try {
        const reviews = await review.find();
        res.status(200).json(reviews)
    } catch (error) {
        next(error)
    }
}


export const updateReview = async (req, res, next) => {
    try {
        const reviews = await review.find();
        res.status(200).json(reviews)
    } catch (error) {
        next(error)
    }
}


export const deleteOneReview = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedReview = await review.findByIdAndDelete(id);

        if (!deletedReview) {
            return res.status(404).json({ msg: `Review with ID ${id} not found` });
        }

        res.status(200).json({ msg: `Review with ID ${id} has been deleted` });
    } catch (error) {
        next(error);
    }
};
