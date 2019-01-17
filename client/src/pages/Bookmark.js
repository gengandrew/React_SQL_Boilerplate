import React, { Component } from "react";
import Navbar from "../components/navbar";
import { Container, Button } from "reactstrap";

class Bookmark extends Component {
  //state = {  }
  render() {
    return (
      <div>
        <Navbar />
        <Container style={{ padding: "10px" }}>
          <Button color="primary">
            <a href="https://www.google.com">Google</a>
          </Button>
        </Container>
      </div>
    );
  }
}

export default Bookmark;
