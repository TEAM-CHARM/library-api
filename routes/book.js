import { Router } from "express";
import { deleteBook, getAllBooks, getOneBook, postAllBooks, updateBook } from "../controllers/book.js";


export const bookRouter = Router()
bookRouter.get('/books', getAllBooks)
bookRouter.get('/book/:id', getOneBook)
bookRouter.post('/books', postAllBooks)
bookRouter.patch('/book/:id', updateBook)
bookRouter.delete('/book/:id', deleteBook)