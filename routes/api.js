const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const dbConfig = require("../config/keys");
const connection = mysql.createConnection(dbConfig);

// Get all items from products
router.get("/getAll", (req, res) => {
  let query = "SELECT * FROM products;";
  let output = connection.query(query, (err, result) => {
    if (err) {
      return res.send(err); //removing the return
    } else {
      return res.json({
        data: result
      });
    }
  });
});

// Create Database
router.get("/createDB", (req, res) => {
  let query = "CREATE DATABASE products;";
  let output = connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Database Created");
    }
  });
});

// Create Table
router.get("/createTable", (req, res) => {
  let query =
    "CREATE table products (id int NOT NULL AUTO_INCREMENT, name VARCHAR(50), cost int, PRIMARY KEY (id));";
  let output = connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Table Created");
    }
  });
});

// Insert Item
router.get("/insert", (req, res) => {
  let item = {
    name: "Cool Watch",
    cost: 100
  };
  let query = "INSERT INTO products SET ?";
  let output = connection.query(query, item, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Insert has been made");
    }
  });
});

// Select Item
router.get("/select/:id", (req, res) => {
  let query = `SELECT * FROM products WHERE id = ${req.params.id}`;
  let output = connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      let JSONOut = JSON.parse(JSON.stringify(result));
      console.log(JSONOut[0]);
      return res.send(
        "Selection has been made at " + JSON.stringify(JSONOut[0])
      );
    }
  });
});

// Update Item
router.get("/update/:id", (req, res) => {
  let update = 20;
  let query = `UPDATE products SET cost = ${update} WHERE id = ${
    req.params.id
  }`;
  let output = connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      console.log(result);
      return res.send("Update has been made");
    }
  });
});

// Delete Item
router.get("/delete/:id", (req, res) => {
  let query = `DELETE FROM products WHERE id = ${req.params.id}`;
  let output = connection.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      console.log(result);
      return res.send("Delete has been made");
    }
  });
});

module.exports = router;