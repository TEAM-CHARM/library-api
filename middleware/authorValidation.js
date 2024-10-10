import Joi from "joi";

// Author Schema Validation using Joi
const authorSchema = Joi.object({
  name: Joi.string().required().min(3).max(255),
  bio: Joi.string().required().min(10).max(800),
  books: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)), // Validate array of ObjectId as a string
});

export const validateAuthor = (req, res, next) => {
  const { error } = authorSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ error: error.details.map((x) => x.message) });
  }
  next(); // Proceed to the next middleware or controller
};
