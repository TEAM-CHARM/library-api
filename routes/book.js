import { Router } from "express";
import { deleteBook, getAllBooks, getOneBook, postAllBooks, updateBook } from "../controllers/book.js";


export const bookRouter = Router()
bookRouter.get('/books', getAllBooks)
bookRouter.get('/books/:id', getOneBook)
bookRouter.post('/books', postAllBooks)
bookRouter.patch('/books/:id', updateBook)
bookRouter.delete('/books/:id', deleteBook)