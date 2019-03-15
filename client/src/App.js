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
