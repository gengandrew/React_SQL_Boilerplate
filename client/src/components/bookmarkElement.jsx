import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems, deleteItems } from "../actions/itemActions";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
  Collapse
} from "reactstrap";
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

  /*
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
   */

  /*
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
   */
  render() {
    let { items } = this.props.item;
    const AllBookmarks = items.filter(items => items.CategoryName === "All");
    const Categories = items.filter(items => items.CategoryName !== "All");

    AllBookmarks.map(category => {
      //console.log(category.Bookmarks);
      let kk = category.Bookmarks;
      console.log(kk);
    });
    /*
    AllBookmarks[0].map(({ CategoryName, CategoryID, Bookmarks }) => {
      console.log(Bookmarks);
      
      Bookmarks.map(({ BookmarkName }) => {
        //console.log("Hello world" + BookmarkName);
      }); 
    });*/

    return (
      <Container>
        <Row>
          <Col xs="12">
            <ListGroup>
              {AllBookmarks.map(({ CategoryName, CategoryID, Bookmarks }) => (
                <ListGroupItem>
                  <Button
                    style={{ width: "100%", marginBottom: "1rem" }}
                    color="primary"
                  >
                    {CategoryName}
                  </Button>
                  <ListGroupItem>
                    <ListGroup>
                      {Bookmarks.map(
                        ({
                          BookmarkDescription,
                          BookmarkID,
                          BookmarkName,
                          LocalKey,
                          URL
                        }) => (
                          <CSSTransition
                            key={BookmarkID}
                            timeout={500}
                            classNames="fade"
                          >
                            <ListGroupItem>
                              <Button
                                style={{ marginRight: "0.5rem" }}
                                color="danger"
                                size="sm"
                                id={BookmarkID}
                                onClick={this.deleteClick.bind(
                                  this,
                                  BookmarkID
                                )}
                              >
                                &times;
                              </Button>
                              <a href={URL}>{BookmarkName}</a>
                            </ListGroupItem>
                          </CSSTransition>
                        )
                      )}
                    </ListGroup>
                  </ListGroupItem>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
      /*
      <Container>
        <ListGroup>
          <TransitionGroup>
            {items.map(category => (
              <ListGroupItem>
                <div>{category.CategoryName}</div>
              </ListGroupItem>
            ))}
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
