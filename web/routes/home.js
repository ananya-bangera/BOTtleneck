import mysql from "mysql2";
import express from "express";
import session from "express-session";
const homeRouter = express.Router();

// credentials
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
    return true;
  } catch (error) {
    console.log(error.stack);
    return false;
  }
}

// Homepage Routes
homeRouter.get("/", (req, res) => {
  if (req.session.userid) {
    const flag = checkConnection();
    if (!flag) {
      const result = {
        message: "failure",
        logged: false,
        userid: req.session.userid,
        username: req.session.userid,
      };
      res.render("index.ejs", result);
    } else {
      res.render("index.ejs", {
        logged: true,
        username: req.session.username,
        userid: req.session.userid,
      });
    }
  } //
  else {
    const result = {
      message: "failure",
      logged: false,
      userid: req.session.username,
      username: req.session.username,
    };
    res.render("index.ejs", result);
  }
});

homeRouter.get("/login", (req, res) => {
  if (req.session.userid) {
    req.session.destroy(() => {
      console.log("Session destroyed!");
    });
    res.redirect("/");
  } else {
    res.render("login.ejs", { invalid: false });
  }
});

homeRouter.post("/login", (req, res) => {
  const { username, password } = req.body;
  const flag = checkConnection();
  if (!flag) {
    const result = { message: "error", status: 401, data: undefined };
    res.render("login.ejs", result);
  } //
  else {
    const pool = mysql.createPool(options);
    pool.query(
      `SELECT * FROM users WHERE username="${username}" AND password="${password}";`,
      (err, rows, fields) => {
        if (rows.length === 1) {
          const person = rows[0];
          req.session.userid = person.id;
          req.session.username = person.username;
          // const result = {
          //   userid: req.session.userid,
          //   username: req.session.username,
          //   logged: true,
          // };
          res.redirect("/");
        } else {
          const result = { invalid: true };
          res.render("login.ejs", result);
        }
      }
    );
  }
});

homeRouter.get("/register", (req, res) => {
  res.render("register.ejs");
});

homeRouter.post("/register", (req, res) => {
  const { name, gender, age, username, password } = req.body;
  const flag = checkConnection();
  if (!flag) {
    const result = {
      message: "error",
      status: 401,
      data: undefined,
      logged: false,
      username: req.session.username,
      userid: req.session.userid,
    };
    res.render("index.ejs", result);
  } //
  else {
    const pool = mysql.createPool(options);
    pool.query(
      `INSERT INTO users (name, gender, age, username, password) VALUES ("${name}", "${gender}", ${age}, "${username}", "${password}");`,
      (err, rows, fields) => {
        if (err) console.log(err);
        console.log(rows);
        const result = {
          message: "success",
          status: 200,
          logged: true,
          username: req.session.username,
          userid: req.session.userid,
        };
        pool.query(
          `SELECT * FROM users WHERE username="${username}";`,
          (err, rows, fields) => {
            if (err) console.log(err);
            const person = rows[0];
            req.session.userid = person.id;
            req.session.username = person.username;
            res.redirect("/");
          }
        );
      }
    );
  }
});

export default homeRouter;
