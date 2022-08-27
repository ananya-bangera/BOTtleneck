import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";
import mysql from "mysql2";

// Routers

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

// allowing cross origin resource sharing
app.use(
  cors({
    origin: "*",
  })
);

// credentials
const options = {
  host: "localhost",
  user: process.env.USER,
  database: process.env.DB_NAME,
  password: process.env.PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Authenticate
function checkConnection() {
  try {
    const pool = mysql.createPool(options);
    console.log(pool);
    return true;
  } catch (error) {
    console.log(error.stack);
    return false;
  }
}
checkConnection();

// Routes
app.get("/menu/all", (req, res) => {
  const flag = checkConnection();
  if (!flag) {
    res.json({ message: "error", status: 401, data: undefined });
  } else {
    const pool = mysql.createPool(options);
    pool.query(`SELECT * FROM menu;`, (err, rows, fields) => {
      if (err) console.log(err);
      res.json({ message: "OK", status: 200, data: rows });
    });
  }
});

app.get("/menu/type/:type", (req, res) => {
  const flag = checkConnection();
  if (!flag) {
    res.json({ message: "error", status: 401, data: undefined });
  } else {
    const pool = mysql.createPool(options);
    pool.query(
      `SELECT * FROM menu WHERE type LIKE "%${req.params.type}%";`,
      (err, rows, fields) => {
        if (err) console.log(err);
        res.json({ message: "OK", status: 200, data: rows });
      }
    );
  }
});

app.get("/menu/popular", (req, res) => {
  const flag = checkConnection();
  if (!flag) {
    res.json({ message: "error", status: 401, data: undefined });
  } else {
    const pool = mysql.createPool(options);
    pool.query(`SELECT * FROM menu WHERE rating>8;`, (err, rows, fields) => {
      if (err) console.log(err);
      res.json({ message: "OK", status: 200, data: rows });
    });
  }
});

app.get("/menu/taste/:taste", (req, res) => {
  const flag = checkConnection();
  if (!flag) {
    res.json({ message: "error", status: 401, data: undefined });
  } else {
    const pool = mysql.createPool(options);
    pool.query(
      `SELECT * FROM menu WHERE taste LIKE "%${req.params.taste}%";`,
      (err, rows, fields) => {
        if (err) console.log(err);
        res.json({ message: "OK", status: 200, data: rows });
      }
    );
  }
});
app.get("/menu/place/:place", (req, res) => {
  const flag = checkConnection();
  if (!flag) {
    res.json({ message: "error", status: 401, data: undefined });
  } else {
    const pool = mysql.createPool(options);
    pool.query(
      `SELECT * FROM menu WHERE place LIKE "%${req.params.place}%";`,
      (err, rows, fields) => {
        if (err) console.log(err);
        res.json({ message: "OK", status: 200, data: rows });
      }
    );
  }
});

app.get("/order/:id", (req, res) => {});

app.post("/order/:id", (req, res) => {});

app.put("/order/:id", (req, res) => {});

// Homepage

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
  res.json({ message: "Failure", status: 401, data: null });
});

// PORT
const PORT = process.env.PORT || 5000;

console.log(checkConnection());

app.listen(PORT, () => {
  console.log(`Successfully listening on port ${PORT}!`);
});
