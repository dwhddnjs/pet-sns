const express = require("express");
const router = express.Router();
const authCtr = require("../../controller/authCtr");

router.post("/register", authCtr.register);

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;
