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

class CommandModal extends Component {
  state = {
    modal: false,
    BookmarkName: "",
    URL: "",
    BookmarkDescription: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ BookmarkName: e.target.value });
  };

  onChangeUrl = e => {
    this.setState({ URL: e.target.value });
  };

  onChangeDescription = e => {
    this.setState({ BookmarkDescription: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      BookmarkName: this.state.BookmarkName,
      URL: this.state.URL,
      BookmarkDescription: this.state.BookmarkDescription
    };
    this.props.addItems(newItem);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          onClick={this.toggle}
        >
          Add New Update Command
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Bookmarks</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="BookmarkName"
                  id="item"
                  placeholder="Add Bookmark"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="URL"
                  id="item"
                  placeHolder="Add Url Link"
                  onChange={this.onChangeUrl}
                  style={{ marginTop: "10px" }}
                />
                <Input
                  type="test"
                  name="BookmarkDescription"
                  id="item"
                  placeHolder="Add a Description"
                  onChange={this.onChangeDescription}
                  style={{ marginTop: "10px" }}
                />
                <Button color="dark" style={{ marginTop: "1rem" }} block>
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
)(CommandModal);
