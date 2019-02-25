import React, { Component } from "react";
import AddNewApp from "../components/addNewApp";
import Navbar from "../components/navbar";
import { Container } from "reactstrap";

class AddAppIns extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container style={{marginTop: "2rem"}}>
          <AddNewApp />
        </Container>
      </React.Fragment>
    );
  }
}

export default AddAppIns;
