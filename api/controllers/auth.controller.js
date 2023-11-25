import { errorHandler } from "../middleware/error.handler.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  try {
    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    }).save();
    res
      .status(201)
      .json({ user_id: newUser._id, message: "User created successfully!" });
  } catch (err) {
    next(err);
  }
};