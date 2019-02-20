import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { addAppDatabase, changeToAppDB, getAllTables } from "../actions/itemActions";
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
    host: "",
    user: "",
    password: "",
    database: ""
  };

  constructor(props){
    super(props);
    //this.onSubmit = this.onSubmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.helper = this.helper.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChangeName = e => {
    this.setState({ name: e.target.value });
  };

  onChangeHost = e => {
    this.setState({ host: e.target.value });
  };

  onChangeDB = e => {
    this.setState({ database: e.target.value });
  };

  onChangeUserName = e => {
      this.setState({ user: e.target.value });
  };

  onChangePassword = e => {
      this.setState({ password: e.target.value });
  };
/*
  async onSubmit(e){

  }
*/
  async helper(e){
    let pingTest = await this.props.getAllTables();
    return pingTest;
  }

  async onSubmit(e){
    const newItem = {
      name: this.state.name,
      host: this.state.host,
      user: this.state.user,
      password: this.state.password,
      database: this.state.database
    };
    this.props.addAppDatabase(newItem);
    this.props.changeToAppDB(newItem);
    let kk = this.helper();
    alert(kk);
    let pingTest = await this.props.getAllTables();
    if(pingTest === 0){
      alert("Failure");
    } else {
      alert("sucess");
    }
    console.log("THis is cool" + pingTest);
    this.toggle();
  }
/*
  onSubmit = e => {
    e.preventDefault();
    const newItem = {
        name: this.state.name,
        host: this.state.host,
        user: this.state.user,
        password: this.state.password,
        database: this.state.database
    };
    this.props.addAppDatabase(newItem);
    this.props.changeToAppDB(newItem);
    new Promise((resolve, reject) => {
      let pingTest = this.props.getAllTables();
      console.log(pingTest);
      if(pingTest === 1){
        resolve("works");
      } else {
        reject(Error("IT BROKE"))
      }
    })
    this.toggle();
  };
*/
  render() {
    return (
      <React.Fragment>
        <a className="nav-link" onClick={this.toggle}>
          Add App
        </a>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Adding new Application</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Application Name"
                  onChange={this.onChangeName}
                />
                <Input
                  type="text"
                  name="host"
                  id="item"
                  placeHolder="Host Name"
                  onChange={this.onChangeHost}
                  style={{ marginTop: "10px" }}
                />
                <Input
                  type="test"
                  name="database"
                  id="item"
                  placeHolder="Database Name"
                  onChange={this.onChangeDB}
                  style={{ marginTop: "10px" }}
                />
                <Input
                  type="test"
                  name="user"
                  id="item"
                  placeHolder="Admin Username"
                  onChange={this.onChangeUserName}
                  style={{ marginTop: "10px" }}
                />
                <Input
                  type="test"
                  name="password"
                  type="password"
                  id="item"
                  placeHolder="Admin Password"
                  onChange={this.onChangePassword}
                  style={{ marginTop: "10px" }}
                />
                <Button color="dark" style={{ marginTop: "1rem" }} block>
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
    item: state.item
  });

export default connect(
  mapStateToProps,
  { addAppDatabase, changeToAppDB, getAllTables}
)(itemModal);
