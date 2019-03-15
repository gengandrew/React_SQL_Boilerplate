/*
  Main page for the given full stack webapp.
  The main page extends to the following classes:
    1. Components classes found in the components folder.
    2. All other providers and stores for the middlewear.
*/
import React, { Component } from "react";
import { Provider } from "react-redux";
//import store from "./store";
import Sidebar from "./components/Sidebar";
import Custom_Content from "./components/Custom_Content";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/stylesheet.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Custom_Content />
      </div>
    );
  }
}

export default App;
