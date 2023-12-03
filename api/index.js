import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

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
app.use(express.json());

app.listen(3000, () => {
  console.log(`Server is running at PORT 3000`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use(cookieParser());

app.use((err, req, res, next) => {
  const statusCode = err.status_code || 500;
  const message = err.message || "Internal server error!";
  return res.status(statusCode).json({
    success: false,
    status_code: statusCode,
    message,
  });
});