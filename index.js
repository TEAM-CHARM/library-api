import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';

import { bookRouter } from "./routes/book.js";
//import { userRouter } from "./routes/user.js";
import { reviewRouter } from "./routes/review.js";
import { authorRouter } from "./routes/author.js";
import 'dotenv/config';

await mongoose.connect(process.env.MONGO_URI).then(() => console.log("Database connected successfully")).catch((error) => console.log("Error connecting to database", error));

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use(cors());
app.use(express.json());
app.use(bookRouter);
//app.use(userRouter)
app.use(reviewRouter);
app.use(authorRouter);




app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
});