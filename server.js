const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const dbConfig = require("./config/keys");
const api = require("./routes/api");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
const connection = mysql.createConnection(dbConfig);

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log("sucess");
  }
});

app.use("/api", api);

app.listen(port, () => {
  console.log("Server Listening on port " + port);
});
