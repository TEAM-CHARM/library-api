import { Router } from "express";
import { getAllAuthors, getOneAuthor, createAuthor, updateAuthor } from "../controllers/author.js";


export const authorRouter = Router()
authorRouter.get('/author', getAllAuthors)
authorRouter.get('/author/:id', getOneAuthor)
authorRouter.post('/author', createAuthor)
authorRouter.patch('/author/:id', updateAuthor)