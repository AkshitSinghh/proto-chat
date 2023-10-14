const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../db/models/userRegisterModel");

router.route("/register").post((req, res) => {
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
