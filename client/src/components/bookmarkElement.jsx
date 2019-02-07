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

  deleteClick = BookmarkID => {
    this.props.deleteItems(BookmarkID);
  };

  render() {
    const { items } = this.props.item;
    return (
      <div />
      /*
      <Container>
        <ListGroup>
          <TransitionGroup className="bookmark-Element">
            {items.map(
              ({
                BookmarkDescription,
                BookmarkID,
                BookmarkName,
                LocalKey,
                URL
              }) => (
                <CSSTransition key={BookmarkID} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button
                      style={{ marginRight: "0.5rem" }}
                      color="danger"
                      size="sm"
                      id={BookmarkID}
                      onClick={this.deleteClick.bind(this, BookmarkID)}
                    >
                      &times;
                    </Button>
                    <a href={URL}>{BookmarkName}</a>
                  </ListGroupItem>
                </CSSTransition>
              )
            )}
          </TransitionGroup>
        </ListGroup>
      </Container>
      */
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
