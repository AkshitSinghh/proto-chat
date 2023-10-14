const mongoose = require("mongoose");

const registerationDetails = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email Already Exists"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username Already Exists"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    unique: false,
  },
});

module.exports =
  mongoose.model.Users || mongoose.model("Users", registerationDetails);
