const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass4me",
  database: "TestDB"
});

connection.connect(err => {
  if (err) return err;
});

app.get("/", (req, res) => {
  res.send("look for /products for database entries");
});

app.get("/products", (req, res) => {
  connection.query("SELECT * FROM TestDB;", (err, result) => {
    if (err) return res.send(err);
    else {
      return res.json({ data: result });
    }
  });
});

app.get("/products", (req, res) => {});

app.listen(3000, () => {
  console.log("server listening to port 3000");
});
