import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add the username"],
        unigue: [true, "Username already exists!"]
    },
    email: {
        type: String,
        require: [true, "Please add the email address"],
        unique: [true, "Email address already registered"]
    },
    password: {
        type: String,
        require: [true, "Please add the user password"],
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("REUser", userSchema);