const express = require("express");
const auth = require("../auth");

const router = express.Router();

router.route("/chat").get(auth, (request, response) => {
  response.json({ message: "You are authorized to access me" });
});

module.exports = router;
