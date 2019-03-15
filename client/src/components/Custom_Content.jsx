import React, { Component } from "react";
import { Button } from 'reactstrap';
import MainNavbar from "./MainNavbar";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class Custom_Content extends Component {
  render() {
    return (
      <div>
        <MainNavbar/>
        <Button color="primary" href="http://localhost:5000/api/getAll" style={{marginLeft: "10px"}}>Widget</Button>
        <Button color="primary" href="http://localhost:3000/Bookmark" style={{marginLeft: "10px"}}>Bookmark</Button>
      </div>
    );
  }
}

export default Custom_Content;