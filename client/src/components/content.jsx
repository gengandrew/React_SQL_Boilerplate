import React, { Component, Button } from "react";
import MainNavbar from "./MainNavbar";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

export default class Custom_Content extends Component {
  state = {};

  render() {
    return (
      <div id="content">
        <MainNavbar />
        <button className="btn btn-primary">
          <a href="http://localhost:5000/api/getAll">Widget</a>
        </button>
        <button className="btn btn-primary" style={{ marginLeft: "10px" }}>
          <a href="http://localhost:3000/Bookmark">Bookmark</a>
        </button>
        <Button color="primary" style={{marginLeft: "10px"}}>
          Init_Database
        </Button>
      </div>
    );
  }
}

