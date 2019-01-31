import React, { Component } from "react";
import Test from "../components/bookmarkElement";
import ItemModal from "../components/itemModal";
import { Container } from "reactstrap";

class TestPage extends Component {
  render() {
    return (
      <Container>
        <ItemModal />
        <Test />
      </Container>
    );
  }
}

export default TestPage;
