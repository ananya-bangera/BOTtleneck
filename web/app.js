import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
import mysql from "mysql2";
import session from "express-session";

// Routers
import homeRouter from "./routes/home.js";
import botRouter from "./routes/bot.js";
import guideRouter from "./routes/guide.js";
import contactRouter from "./routes/contact.js";

// dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

// dotenv
dotenv.config();

// express
var app = express();

// view engine setup
app.set("views", [
  path.join(__dirname, "views"),
  path.join(__dirname, "views/bots"),
]);
app.set("view engine", "ejs");

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "iamakey",
    resave: false,
    saveUninitialized: true,
    cookie: { path: "/", maxAge: 1000 * 60 * 60 * 24 * 10 },
  })
);

// Routes
app.use("/", homeRouter);
app.use("/bots", botRouter);
app.use("/contact", contactRouter);
app.use("/guide", guideRouter);

// database connection
const options = {
  host: "localhost",
  user: "root",
  database: "chatbot",
  password: "Vaibhav@143",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// authenticate connection
function checkConnection() {
  try {
    const pool = mysql.createPool(options);
    pool.query("SHOW TABLES;", (err, rows, fields) => {
      console.log(rows);
    });
    console.log(pool);
    // pool.query("SHOW tables;", (error, rows, fields) => console.log(rows));
    return true;
  } catch (error) {
    console.log(error.stack);
    return false;
  }
}

// checkConnection();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Successfully listening on port ${PORT}!`);
});
