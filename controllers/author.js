import { Author } from "../models/author.js";

export const getAllAuthors = async (req, res, next) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors)
    } catch (error) {
        next(error);
    }
}
export const getOneAuthor = async (req, res, next) => {
    try {
        const author = await Author.findById(req.params.id)
        if(!author){
            return res.status(404).json({message:'Author not found'})
        }
        res.status(200).json(author)
    } catch (error) {
        next(error);
    }
}
export const createAuthor = async (req, res, next) => {
    try {
        const author = new Author (req.body);
        await author.save();
        res.status(201).json(author)
    } catch (error) {
        next(error);
    }
}
export const updateAuthor = async (req, res, next) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if(!author){
            return res.status(404).json({message:'Author not found'})
        }
        res.status(200).json(authors)
    } catch (error) {
        next(error);
    }
}
