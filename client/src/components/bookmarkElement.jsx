import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

class bookmarkElement extends Component {
  state = {
    items: [
      { id: uuid(), name: "Google1" },
      { id: uuid(), name: "Google2" },
      { id: uuid(), name: "Google3" },
      { id: uuid(), name: "Google4" }
    ]
  };
  render() {
    const { items } = this.state;
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
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    style={{ marginRight: "0.5rem" }}
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        items: state.items.filter(item => item.id !== id)
                      }));
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default bookmarkElement;
