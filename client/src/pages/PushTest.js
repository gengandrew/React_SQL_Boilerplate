import React, { Component } from "react";
import Navbar from "../components/NavigationBar";
import { Container , Button} from "reactstrap";

class PushTest extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
            <Button xs color="primary" style={{marginTop: "2rem"}} onClick={this.InsertIntoDB}>
            Push Into DB
            </Button>
        </Container>
      </div>
    );
  }
}

export default PushTest;
