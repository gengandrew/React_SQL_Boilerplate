import React, { Component } from "react";
import {
  Row,
  Col,
  Tooltip,
  Button,
  Popover,
  PopoverBody,
  PopoverHeader,
  ListGroup,
  ListGroupItem,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class addNewApp extends Component {
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
      <Row>
        <Col xs="9">
          <a
            style={{
              textDecoration: "underline",
              backgroundColor: "transparent",
              color: "blue",
              padding: "0px",
              fontWeight: "bold",
              fontSize: "100%"
            }}
            href="https://www.google.com"
            id="Tooltip"
          >
            Fucken Google
          </a>
          <Tooltip
            placement="bottom"
            isOpen={this.state.tooltipOpen}
            target="Tooltip"
            toggle={this.tooltipToggle}
          >
            The following link brings you to Google
          </Tooltip>
        </Col>
        <Col xs="auto">
          {" "}
          <Button
            style={{
              paddingTop: "0px",
              paddingBottom: "0px",
              paddingLeft: "2px",
              paddingRight: "2px"
            }}
            id="Popover1"
            type="button"
          >
            Move
          </Button>
          <Popover
            placement="bottom"
            isOpen={this.state.popoverOpen}
            target="Popover1"
            toggle={this.popoverToggle}
          >
            <PopoverHeader>Select new Category</PopoverHeader>
            <PopoverBody>
              <ListGroup>
                <ListGroupItem>
                  <Button color="primary">Category 1</Button>
                </ListGroupItem>
                <ListGroupItem>
                  <Button color="primary">Category 2</Button>
                </ListGroupItem>
                <ListGroupItem>
                  <Button color="primary">Category 3</Button>
                </ListGroupItem>
              </ListGroup>
            </PopoverBody>
          </Popover>
        </Col>
        <Col xs="auto">
          <FormGroup check>
            <Label check style={{ fontSize: "13px", fontStyle: "italic" }}>
              <Input type="checkbox"> </Input> Add to Favorites
            </Label>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}

export default addNewApp;
