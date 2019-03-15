/*
  Starting state for the Middlewear of the full stack application.
  All files corresponding to the middlewear include:
    1. The reducer folder all reducers corresponding for the reducers.
    2. The actions folder for all client side actions dynamically recongnized by the middlewear.
*/
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;
