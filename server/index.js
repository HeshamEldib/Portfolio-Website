require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const projectsRouter = require("./routers/projects.router");
const skillsRouter = require("./routers/skills.router");
const textRouter = require("./routers/text.router");
const httpStatusText = require("./utils/httpStatusText")

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connecting data");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors());
app.use(express.json());
app.use("/api/projects", projectsRouter);
app.use("/api/skills", skillsRouter);
app.use("/api/text", textRouter);
app.all("*", (req, res, next) => {
  return res.status(404).json({
    status: httpStatusText.ERROR,
    message: "this resource is not fount",
  });
});

app.listen(process.env.PORT, () => {
  console.log("localhost:" + process.env.PORT);
});
