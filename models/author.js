import { Schema, model } from "mongoose";

const authorSchema = new Schema ({
    name: {type: String, required: true},
    bio: {type: String, required: true}
})

export const author = model('Author', authorSchema)