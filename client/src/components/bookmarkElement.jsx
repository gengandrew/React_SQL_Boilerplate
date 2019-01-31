import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems, deleteItems } from "../actions/itemActions";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import PropTypes from "prop-types";

class bookmarkElement extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  deleteClick = id => {
    this.props.deleteItems(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <Button
          color="primary"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("enter item");
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
              }));
            }
          }}
        >
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="bookmark-Element">
            {items.map(({ id, name, url }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    style={{ marginRight: "0.5rem" }}
                    color="danger"
                    size="sm"
                    onClick={this.deleteClick.bind(this, id)}
                  >
                    &times;
                  </Button>
                  <a href={url}>{name}</a>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

bookmarkElement.propTypes = {
  getItems: PropTypes.func.isRequired,
  deleteItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItems }
)(bookmarkElement);
