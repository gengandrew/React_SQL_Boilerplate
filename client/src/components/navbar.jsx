import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";

class navbar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Container>
            <NavbarBrand href="/">Devtool Interface</NavbarBrand>
            <Form inline>
              <FormGroup inline className="my-2 my-lg-0">
                <Input
                  inline="true"
                  className="form-control mr-sm-2"
                  type="search"
                  name="bookmarkSearch"
                  id="bookmarkSearch"
                  placeholder="Search"
                  ariaLabel="Search"
                />
                <Button
                  inline="true"
                  color="primary"
                  className="my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </Button>
              </FormGroup>
            </Form>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink>Cool Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default navbar;
