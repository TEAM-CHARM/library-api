import { Router } from "express";
import { deleteAuthor, getAllAuthors, getOneAuthor, postAuthor, updateAuthor } from "../controllers/author.js";


export const authorRouter = Router()
authorRouter.get('/author', getAllAuthors)
authorRouter.get('/author/:id', getOneAuthor)
authorRouter.post('/author', postAuthor)
authorRouter.patch('/author/:id', updateAuthor)
authorRouter.delete('/author/:id', deleteAuthor)