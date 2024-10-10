import Joi from "joi";

//Book Schema using Joi
const bookSchema = Joi.object({
  title: Joi.string().required().min(3).max(255),
  subTitle: Joi.string().optional().max(255),
  author: Joi.string().required().min(3).max(255),
  rating: Joi.number().optional().min(0).max(5),
  genre: Joi.string().optional(),
  description: Joi.string().optional().max(1000),
  year: Joi.number().optional(),
  language: Joi.string().optional(),
  isbn: Joi.number().optional(),
  publisher: Joi.string().optional(),
  pages: Joi.number().optional(),
  imageLink: Joi.string().optional().uri(),
  pdfLink: Joi.string().optional().uri(),
  copies: Joi.number().optional(),
});

export const validateBook = (req, res, next) => {
  const { error } = bookSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ error: error.details.map((x) => x.message) });
  }
  next(); // Move to the next middleware/controller if validation passes
};