const Text = require("../modules/text.modules");
const httpStatusText = require("../utils/httpStatusText");

const getAllText = async (req, res, next) => {
  const texts = await Text.find({}, { __v: false });

  res.json({ status: httpStatusText.SUCCESS, data: { texts } });
};

module.exports = { getAllText };
