const express = require("express");
const projectsControllers = require("../controllers/projects.controller");

const router = express.Router();

router.get("/", projectsControllers.getAllProjects);
router.get("/:projectId", projectsControllers.getProject);

router.post("/add", projectsControllers.addProject);

module.exports = router;
