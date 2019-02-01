import React, { Component } from "react";
import {
  Collapse,
  Container,
  Button,
  ListGroup,
  ListGroupItem,
  Col,
  Row
} from "reactstrap";
import Navbar from "../components/navbar";
import BookmarkTab from "../components/bookmarkTab";

class Bookmark extends Component {
  constructor(props) {
    super(props);
    this.collapseToggle = this.collapseToggle.bind(this);
    this.popoverToggle = this.popoverToggle.bind(this);
    this.tooltipToggle = this.tooltipToggle.bind(this);
    this.state = { collapse: false, popoverOpen: false, tooltipOpen: false };
  }

  collapseToggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  popoverToggle() {
    this.setState({ popoverOpen: !this.state.popoverOpen });
  }

  tooltipToggle() {
    this.setState({ tooltipOpen: !this.state.tooltipOpen });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container style={{ padding: "10px" }} className="allBookmarks">
          <Row>
            <Col xs="12">
              <ListGroup>
                <ListGroupItem>
                  <Button
                    style={{ width: "100%", marginBottom: "1rem" }}
                    color="primary"
                    onClick={this.collapseToggle}
                  >
                    Category 1
                  </Button>
                  <Collapse isOpen={this.state.collapse}>
                    <ListGroup>
                      <ListGroupItem>
                        <BookmarkTab key="A" />
                      </ListGroupItem>
                      <ListGroupItem>
                        <BookmarkTab key="B" />
                      </ListGroupItem>
                    </ListGroup>
                  </Collapse>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <ListGroup>
                <ListGroupItem style={{ marginTop: "1rem" }}>
                  {""}
                  <Button
                    style={{ width: "100%", marginBottom: "1rem" }}
                    color="primary"
                    onClick={this.collapseToggle}
                  >
                    Category 1
                  </Button>
                  <Collapse isOpen={this.state.collapse}>
                    <ListGroup>
                      <ListGroupItem>
                        <BookmarkTab key="C" />
                      </ListGroupItem>
                    </ListGroup>
                  </Collapse>{" "}
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs="6">
              <ListGroup>
                <ListGroupItem style={{ marginTop: "1rem" }}>
                  <Button
                    style={{ width: "100%", marginBottom: "1rem" }}
                    color="primary"
                    onClick={this.collapseToggle}
                  >
                    Category 1
                  </Button>
                  <Collapse isOpen={this.state.collapse}>
                    <ListGroup>
                      <ListGroupItem>
                        <BookmarkTab key="C" />
                      </ListGroupItem>
                    </ListGroup>
                  </Collapse>
                </ListGroupItem>
                <ListGroupItem style={{ marginTop: "1rem" }}>
                  <Button
                    style={{ width: "100%", marginBottom: "1rem" }}
                    color="primary"
                    onClick={this.collapseToggle}
                  >
                    Category 1
                  </Button>
                  <Collapse isOpen={this.state.collapse}>
                    <ListGroup>
                      <ListGroupItem>
                        <BookmarkTab key="C" />
                      </ListGroupItem>
                    </ListGroup>
                  </Collapse>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Bookmark;
