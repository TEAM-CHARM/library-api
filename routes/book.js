import { Router } from "express";
import { deleteBook, getAllBooks, getOneBook, postAllBooks, searchBook, updateBook } from "../controllers/book.js";


export const bookRouter = Router()
bookRouter.post('/books', postAllBooks)
bookRouter.get('/books/search',searchBook)
bookRouter.get('/books', getAllBooks)
bookRouter.get('/books/:id', getOneBook)
bookRouter.patch('/books/:id', updateBook)
bookRouter.delete('/books/:id', deleteBook)