import { author } from "../models/author.js";


export const getAllAuthors = async (req, res, next) => {
    try {
        const authors = await author.find();
        res.status(200).json(authors)
    } catch (error) {
        next(error);
    }
}
export const getOneAuthor = async (req, res, next) => {
    try {
        const authors = await author.find();
        res.status(200).json(authors)
    } catch (error) {
        next(error);
    }
}
export const postAuthor = async (req, res, next) => {
    try {
        const authors = await author.find();
        res.status(200).json(authors)
    } catch (error) {
        next(error);
    }
}
export const updateAuthor = async (req, res, next) => {
    try {
        const authors = await author.find();
        res.status(200).json(authors)
    } catch (error) {
        next(error);
    }
}
export const deleteAuthor = async (req, res, next) => {
    try {
        const authors = await author.find();
        res.status(200).json(authors)
    } catch (error) {
        next(error);
    }
}