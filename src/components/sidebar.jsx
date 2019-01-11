import React, { Component } from "react";
import {} from "reactstrap";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/stylesheet.css";

class Sidebar extends Component {
  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Awesome Content</h3>
        </div>
        <ul className="list-unstyled components">
          <p>Cool Sidebar</p>
          <li className="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dopdown-toggle"
            >
              PlaceHolder
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Placeholder</a>
              </li>
              <li>
                <a href="#">Placeholder</a>
              </li>
              <li>
                <a href="#">Placeholder</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Placeholder</a>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              PlaceHolder
            </a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Something 1</a>
          </li>
          <li>
            <a href="#">Something 2</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
