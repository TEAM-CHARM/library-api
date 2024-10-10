import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: { type: String, required: true, index: true },

  subTitle: { type: String },

  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
  },

  rating: { type: Number },

  genre: { type: String },

  description: { type: String },

  year: { type: Number },

  language: { type: String },

  isbn: { type: Number },
  copies:{type:Number},

  publisher: { type: String },

  pages: { type: Number },

  imageLink: { type: String },

  pdfLink: { type: String },
});

export const book = model('Book', bookSchema)