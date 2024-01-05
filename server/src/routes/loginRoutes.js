const express = require("express");
const router = express.Router();
const { login } = require("../controllers/loginController");

// LOGIN
router.post("/", login); // login customer

module.exports = router;
