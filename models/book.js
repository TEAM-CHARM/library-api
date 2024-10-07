import { Schema, model } from "mongoose";

const bookSchema = new Schema({

    title: { type: String, required: true },

    subTitle: {type: String},

    author: { type: String, required: true },

    rating: { type: Number},

    genre: { type: String },

    description: { type: String },

    year: {type: Number},

    language: {type: String},

    isbn: {type: Number},

    publisher: {type: String},

    pages: { type: Number },

    imageLink: {type: String},

    pdfLink: {type: String},
});

export const book = model('Book', bookSchema)