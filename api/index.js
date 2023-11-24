import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';

dotenv.config();

mongoose
  .connect(process.env.DB_STRING)
  .then(() => {
    console.log("DB Connection Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log(`Server is running at PORT 3000`);
});

app.use('/api/user', userRouter);