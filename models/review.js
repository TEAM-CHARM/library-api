import { Schema, model, Types } from "mongoose";

const reviewSchema = new Schema ({
    rating: {type: Number, min: 1, max: 5, required: true},

    reviewText: {type: String, required: true, maxLenght: 500},

    userId: {type: Types.ObjectId, required: true, ref: 'user'},

    bookId: {type: Types.ObjectId, required: true, ref: 'book'},

    dateCreated: {type: Date}
})

export const review = model('Review', reviewSchema)