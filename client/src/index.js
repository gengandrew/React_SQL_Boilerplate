import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Bookmark from "./pages/Bookmark";
import ErrorPage from "./pages/ErrorPage";
import TestPage from "./pages/TestPage";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/stylesheet.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/Bookmark" component={Bookmark} />
      <Provider store={store}>
        <Route path="/Test" component={TestPage} />
      </Provider>
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
