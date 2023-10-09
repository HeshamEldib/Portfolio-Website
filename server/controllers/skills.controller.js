const Skill = require("../modules/skills.modules");
const httpStatusText = require("../utils/httpStatusText");

const getAllSkills = async (req, res, next) => {
  const skills = await Skill.find({}, { __v: false });

  res.json({ status: httpStatusText.SUCCESS, data: { skills } });
};

module.exports = { getAllSkills };
