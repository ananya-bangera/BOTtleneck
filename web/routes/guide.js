import express from "express";

const guideRouter = express.Router();

guideRouter.get("/", (req, res) => {
  res.render("guide.ejs");
});

export default guideRouter;
