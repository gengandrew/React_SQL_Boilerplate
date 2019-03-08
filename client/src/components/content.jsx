import React, { Component, Button } from "react";
import Navbar from "./mainNavbar";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class Content extends Component {
  state = {};
  init_database = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div id="content">
        <Navbar />
        <button className="btn btn-primary">
          <a href="http://localhost:5000/api/getAll">Widget</a>
        </button>
        <button className="btn btn-primary" style={{ marginLeft: "10px" }}>
          <a href="http://localhost:3000/Bookmark">Bookmark</a>
        </button>
        <Button color="primary" style={{marginLeft: "10px"}} onClick={this.init_database}>
          Init_Database
        </Button>
      </div>
    );
  }
}

export default Content;
