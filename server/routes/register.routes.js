const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../db/models/userRegisterModel");

router.route("/register").post(async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(200).json({
        message: "Email already present",
      });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
    return;
  }

  try {
    let user = await User.findOne({ username: req.body.username });
    if (user) {
      res.status(200).json({
        message: "Username already present",
      });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
    return;
  }

  bcrypt.hash(req.body.password, 10, (error, hashedPassword) => {
    if (error) {
      return res.status(500).json({
        message: "Internal Server Error",
        error,
      });
    }

    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });

    newUser
      .save()
      .then((result) => {
        res.status(201).json({ message: "User has been created", result });
      })
      .catch((error) => {
        res.status(500).json({ message: "Internal Server Error", error });
      });
  });
});

module.exports = router;
