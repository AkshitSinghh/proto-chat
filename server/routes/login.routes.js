const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../db/models/userRegisterModel");

const router = express.Router();

router.route("/login").post(async (req, res) => {
  Users.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      bcrypt.compare(req.body.password, user.password, (error, isValid) => {
        if (error) {
          return res.status(400).json({ message: "Password Incorrect" });
        }

        if (!isValid) {
          return res.status(400).json({ message: "Password Incorrect" });
        }

        const token = jwt.sign(
          {
            userId: user._id,
            userEmail: user.email,
          },
          "RANDOM-TOKEN",
          { expiresIn: "1h" }
        );

        res
          .status(200)
          .json({ message: "Login Successful", email: user.email, token });
      });
    })
    .catch((error) => {
      res.status(500).json({ message: "Internal Server Error", error });
    });
});

module.exports = router;
