import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false,
  },
  about: {
    type: String,
    required: false,
  },
  loggedIn: {
    type: Boolean,
    required: true,
  },
});

export const User = model("user", UserSchema);
