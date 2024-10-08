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
        const review = await review.findById(id);

        if (!review) {
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
        const id = (req.params.id);
        const updateReview = await review.findOneAndUpdate({ _id: req.params.id },
            req.body,
            {
                new: true,
            });
        if (!updateReview) {
            res.status(400).json({ msg: `Book with ID ${id} not found` })
        } else {
            res.status(200).json(reviews)
        }

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
