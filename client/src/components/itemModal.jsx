import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { addItems } from "../actions/itemActions";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class itemModal extends Component {
  state = {
    modal: false,
    name: "",
    url: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeUrl = e => {
    this.setState({ url: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: this.state.name,
      url: this.state.url
    };

    this.props.addItems(newItem);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem", marginTop: "2rem" }}
          onClick={this.toggle}
        >
          Add Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Bookmarks</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Add to Bookmarks</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Bookmark"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="url"
                  id="item"
                  placeHolder="Add Url Link"
                  onChange={this.onChangeUrl}
                  style={{ marginTop: "1px" }}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItems }
)(itemModal);
