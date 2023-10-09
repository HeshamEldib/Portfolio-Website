const Project = require("../modules/project.modules");
const httpStatusText = require("../utils/httpStatusText");

const getAllProjects = async (req, res, next) => {
  const query = req.query;
  const limit = query.limit || 10;
  const page = query.page || 1;
  const skip = (page - 1) * limit;

  const projects = await Project.find({}, { __v: false })
    .limit(limit)
    .skip(skip);

  res.json({ status: httpStatusText.SUCCESS, data: { projects } });
};

const getProject = async (req, res, next) => {
  const project = await Project.findById(req.params.projectId)
  if (!project) {
    return res.json({ status: httpStatusText.ERROR, data: "not found" });
  }
  res.json({ status: httpStatusText.SUCCESS, data: { project } });
};

const addProject = async (req, res, next) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.status(201).json({ status: httpStatusText.SUCCESS, data: { newProject } });
};

module.exports = {
  getAllProjects,
  getProject,
  addProject
};
