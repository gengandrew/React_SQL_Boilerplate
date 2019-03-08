import React, { Component } from "react";
import { Provider } from "react-redux";
//import store from "./store";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/stylesheet.css";

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
