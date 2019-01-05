import React, { Component } from "react";
import NavBar from "./components/navbar";
import SideBar from "react-sidebar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SideBar
          sidebar={<b>Awesome Content</b>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "blue" } }}
        >
          <button onClick={() => this.onSetSidebarOpen(true)}>
            Open SideBar
          </button>
        </SideBar>
      </React.Fragment>
    );
  }
}

export default App;
