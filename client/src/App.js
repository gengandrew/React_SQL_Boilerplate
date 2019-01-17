import React, { Component } from "react";
import { Provider } from "react-redux";
//import store from "./store";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/stylesheet.css";

class App extends Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  componentDidMount() {
    const customScript = document.createElement("script");
    const popperJS = document.createElement("script");

    popperJS.src =
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js";
    popperJS.async = true;
    customScript.src = "./js/customScript.js";
    customScript.async = true;

    document.body.appendChild(popperJS);
    //document.body.appendChild(customScript);
  }*/

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
