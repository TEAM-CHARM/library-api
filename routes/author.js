import { Router } from "express";
import { getAllAuthors, getOneAuthor, createAuthor, updateAuthor } from "../controllers/author.js";


export const authorRouter = Router()
authorRouter.get('/authors', getAllAuthors)
authorRouter.get('/authors/:id', getOneAuthor)
authorRouter.post('/authors', createAuthor)
authorRouter.patch('/authors/:id', updateAuthor)