import { book } from "../models/book.js";


export const getAllBooks = async (req, res, next) => {
    try {
        const newBook = new book(req.body)
        const books = await newBook.save()
        res.status(200).json(books)
    } catch (error) {
        next(error);
    }
}
export const getOneBook = async (req, res, next) => {
   try {
     const id = req.params.id;
     const books = await book.find(); // Retrieve all books
     const Book = books.find((book) => book._id.toString() === id);

     if (!Book) {
       res.status(404).json({ msg: `Book with ID ${id} not found` });
     } else {
       res.status(200).json(Book);
     }
   } catch (error) {
     next(error);
   }

 
}
export const postAllBooks = async (req, res, next) => {
    try {
        const newBook = new book(req.body)
        const books = await newBook.save()
        res.status(200).json(books)
    } catch (error) {
        next(error);
    }
}
export const updateBook = async (req, res, next) => {
    try {
        const newBook = new book(req.body)
        const books = await newBook.save()
        res.status(200).json(books)
    } catch (error) {
        next(error);
    }
}
export const deleteBook = async (req, res, next) => {
    try {
        const newBook = new book(req.body)
        const books = await newBook.save()
        res.status(200).json(books)
    } catch (error) {
        next(error);
    }
}