const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const router = express.Router();

router.use(bodyParser.json());

let dbConfig = require("../config/keys");
let connection = mysql.createConnection(dbConfig);

/*
  Developer side testing tool used to check which database the backend
  is currently working on
*/
router.get("/checkCurrDB", (req, res) => {
  res.send(dbConfig);
  console.log(dbConfig);
});

/*
  Placeholder code used to obtain the names of all Tables within the current database.
  (This code should probably be within the for loop on the Application side)
*/
router.get("/getAllTables", (req, res) => {
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
  Http request for getting all currently inialized databases from our Web Interface database
*/
router.get("/getAllAppDB", (req, res) => {
  let query = "SELECT * FROM bookmarktest.DatabaseKeys;";
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
  console.log("There should be " + req.body.name);
  let query = "INSERT INTO DatabaseKeys SET ?";
  let output = connection.query(query, newInsert, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      res.send(newInsert);
    }
  });
  console.log("testing if code makes it to here");
});

/*
  Werid Code which initializes the backends of all currently
  availaible applications with information in our database
*/
router.get("/Init_Backend", (req,res) => {
  // Application Databases containing all valid keys
  let Application_Databases_Info = req.body;

  for(let i = 0; i < Application_Databases_Info.length; i++){
    let CurrentInfo = Application_Databases_Info[i];
    let CurrConfig = CurrentInfo;
    let connection = mysql.createConnection(CurrConfig);

    router.get(`/getAllFrom${CurrConfig.AppName}`, (req, res) => {
      let query = `SELECT * FROM ${CurrConfig.databaseName}`;
      let output = connection.query(query, (err, result) => {
        if (err) {
          return res.send(err);
        } else {
          return res.jason({
            data: result
          });
        }
      });
    });
  }
});

module.exports = router;
