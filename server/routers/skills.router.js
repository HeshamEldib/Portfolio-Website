const express = require("express");
const skillsControllers = require("../controllers/skills.controller");

const router = express.Router();

router.get("/", skillsControllers.getAllSkills);

module.exports = router;
