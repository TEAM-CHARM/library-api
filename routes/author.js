import { Router } from "express";
import { getAllAuthors, getOneAuthor, createAuthor, updateAuthor } from "../controllers/author.js";
import { validateAuthor } from "../middleware/authorValidation.js";


export const authorRouter = Router()
authorRouter.get('/authors', getAllAuthors)
authorRouter.get('/authors/:id', getOneAuthor)
authorRouter.post('/authors',validateAuthor, createAuthor)
authorRouter.patch('/authors/:id',validateAuthor, updateAuthor)