import express from "express";

const contactRouter = express.Router();

contactRouter.get("/", (req, res) => {
  res.render("contactus.ejs");
});

contactRouter.post("/email", (req, res) => {
  res.redirect("/");
});

export default contactRouter;
