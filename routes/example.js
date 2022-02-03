const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Welcome to the main page");
});

module.exports = router;
