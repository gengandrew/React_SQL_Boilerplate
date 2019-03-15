/*
  Routers call for all given http requests.
  All listed http request can be obtained from the localhost:5000/api location
    1. All http requests are in reference to a mysql relational backend
    2. All database credientals and informations are obtained form the /config/key file
*/
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const router = express.Router();

router.use(bodyParser.json());

let dbConfig = require("../config/keys");
let connection = mysql.createConnection(dbConfig);

/*
  Http Request for Developer side testing tool used to check which database the backend
  is currently working on
*/
router.get("/checkCurrDB", (req, res) => {
  res.send(dbConfig);
  console.log(dbConfig);
});

/*
  Http Request used to obtain the names of all Tables within the current database.
*/
router.get("/getAllTablesNames", (req, res) => {
  let query = `SELECT table_name FROM information_schema.tables WHERE table_schema =${dbConfig.database}`;
  let output = connection.query(query, (err, result) => {
    if (err) {
      return null; //removing the return
    } else {
      return res.json({
        data: result.reverse()
      });
    }
  });
});

/*
  Http request for posting a new database into our service.
*/
router.post("/post_Database", (req, res) => {
  let newInsert = {
    AppName: req.body.name,
    host: req.body.host,
    user: req.body.user,
    passwd: req.body.password,
    databaseName: req.body.database
  }
  let query = "INSERT INTO DatabaseKeys SET ?";
  let output = connection.query(query, newInsert, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(newInsert);
    }
  });
});

/*
  Http request for selecting a row based on concatnated string ID
*/
router.get("/getCategoryList/:UserID", (req, res) => {
  let query = `SELECT * FROM bookmarktest.categorylist WHERE UserID = ${
    req.params.UserID
  };`;
  let output = connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: result
      });
    }
  });
});

/*
  Http request for deleting a row from a table based on concatinated
  string ID.
*/
router.delete("/delete/:ID", (req, res) => {
  let query = `DELETE FROM bookmarks WHERE BookmarkID = ${
    req.params.ID
  }`;
  let output = connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      console.log(result);
      return res.send("Delete has been made");
    }
  });
});

/*
  Create Database
*/
router.get("/createDB/:DatabaseName", (req, res) => {
  let query = `CREATE DATABASE ${req.params.DatabaseName};`;
  let output = connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Database Created");
    }
  });
});

/*
  Create Table
*/
router.get("/createTable/:TableName", (req, res) => {
  let query =
    `CREATE table ${req.params.TableName} (id int NOT NULL AUTO_INCREMENT, name VARCHAR(50), cost int, PRIMARY KEY (id));`;
  let output = connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Table Created");
    }
  });
});

module.exports = router;
