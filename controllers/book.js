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
        const newBook = new book(req.body)
        const books = await newBook.save()
        res.status(200).json(books)
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