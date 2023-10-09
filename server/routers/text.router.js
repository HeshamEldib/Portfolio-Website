const express = require("express");
const textControllers = require("../controllers/text.controller");

const router = express.Router();

router.get("/", textControllers.getAllText);

module.exports = router;
