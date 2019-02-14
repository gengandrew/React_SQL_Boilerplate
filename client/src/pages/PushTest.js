import React, { Component } from "react";
import Navbar from "../components/navbar";
import { Container , Button} from "reactstrap";
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const router = express.Router();

class TestPage extends Component {
  InsertIntoDB = () => {
    const dbConfig = {
        host: "localhost",
        user: "root",
        password: "plzpass4me",
        database: "bookmarktest"
      };
    const connection = mysql.createConnection(dbConfig);
    let newInsert = {
        BookmarkName: "Test Google",
        URL: "https://www.google.com",
        BookmarkDescription: "testing for the insert into DB function"
      };
      let query = "INSERT INTO bookmarks SET ?";
      let output = connection.query(query, newInsert, (err, result) => {
        if (err) {
            console.log("yes err");
        } else {
          console.log("no err");
        }
      });
    alert("Insert into DB");
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container>
            <Button xs color="primary" style={{marginTop: "2rem"}} onClick={this.InsertIntoDB}>
            Push Into DB
            </Button>
        </Container>
      </div>
    );
  }
}

export default TestPage;
