import express from "express";

const botRouter = express.Router();

botRouter.get("/restaurant", (req, res) => {
  if (req.session.userid) {
    res.render("restaurant.ejs", { username: req.session.username });
  } else {
    res.redirect("/");
  }
});

botRouter.get("/hospital", (req, res) => {
  if (req.session.userid) {
    res.render("hospital.ejs", { username: req.session.username });
  } else {
    res.redirect("/");
  }
});

botRouter.get("/university", (req, res) => {
  if (req.session.userid) {
    res.render("university.ejs", { username: req.session.username });
  } else {
    res.redirect("/");
  }
});

export default botRouter;
