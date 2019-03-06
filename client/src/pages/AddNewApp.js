import React, { Component } from "react";
import NewAppComponent from "../components/addNewApp";
import CommandModal from "../components/CommandModal";
import Navbar from "../components/navbar";
import { Container, Button, ListGroup, ListGroupItem } from "reactstrap";

class AddNewApp extends Component {
  constructor(props) {
    super(props);
    this.collapseToggle = this.collapseToggle.bind(this);
    this.state = { collapse: false };
  }

  collapseToggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container style={{marginTop: "2rem"}}>
          <ListGroup>
            <ListGroupItem>
              <CommandModal />
            </ListGroupItem>
            <ListGroupItem>
              <Button>akjsdlashdlahsjlkdjaslh</Button>
            </ListGroupItem>
          </ListGroup>
        </Container>
      </React.Fragment>
    );
  }
}

export default AddNewApp;
