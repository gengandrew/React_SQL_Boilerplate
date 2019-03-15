/*
  Initialization and starting vertex of the express backend.
  Obtains all inital http request from the following:
    1. The given api folder (Currently only the api file is active)
  Additional components attached are given as follows:
    1. The body-parser class for obj parsing
    2. the cors class for express integration
    3. The mysql class for backend relational database management
*/
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const dbConfig = require("./config/keys");
const api = require("./routes/api");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;  // Chooses the defult port specified on server or port 5000
const connection = mysql.createConnection(dbConfig);  // Intalizes by information specified in dbconfig

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log("sucess");
  }
});

app.use("/api", api);

// Starts the server on listening to backend "localhost:5000"
app.listen(port, () => {
  console.log("Server Listening on port " + port);
});
