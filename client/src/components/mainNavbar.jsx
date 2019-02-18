import React, { Component } from "react";
import InsertDBModal from "./InsertDBModal";
//import { Button } from "reactstrap";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class NavBar extends Component {
  //state = {  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="nav navbar-nav ml-auto">
            <li style={{ display: "inline" }}>
              <button type="button" id="sidebarCollapse" className="navbar-btn">
                <span /> <span /> <span />
              </button>
            </li>

            <li className="nav-item active">
              <a className="index-title" href="https://www.google.com">
                Devtool Interface
              </a>
            </li>
            <InsertDBModal />
            <li className="nav-item">
              <a className="nav-link" href="https://www.google.com">
                Page
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.google.com">
                Page
              </a>
            </li>
            <li className="nav-item">
              <form
                className="form-inline my-2 my-lg-0"
                style={{ marginTop: "8" }}
              >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
