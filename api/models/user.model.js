import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "Please add the username"],
      unigue: [true, "Username already exists!"],
    },
    email: {
      type: String,
      require: [true, "Please add the email address"],
      unique: [true, "Email address already registered"],
    },
    password: {
      type: String,
      require: [true, "Please add the user password"],
    },
    avatar:{
      type: String,
      default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("REUser", userSchema);
export default User;
