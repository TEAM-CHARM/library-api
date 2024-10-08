
import mongoose, { Schema, model } from "mongoose";

const authorSchema = new Schema ({
    name: {type: String, required: true},
    bio: {type: String,
         required: true,
        maxlength:200,
        minlength:10,
        },
     books:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Book'
     }]   
})

export const Author = model('Author', authorSchema)