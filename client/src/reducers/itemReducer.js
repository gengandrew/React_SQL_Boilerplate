import uuid from "uuid";
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from "../actions/types";

const initialState = {
  items: [
    { id: uuid(), name: "Google1", url: "https://www.google.com" },
    { id: uuid(), name: "Yahoo", url: "https://www.yahoo.com" },
    {
      id: uuid(),
      name: "Fake News",
      url: "https://www.washingtonpost.com/?noredirect=on"
    },
    { id: uuid(), name: "Google4", url: "https://www.google.com" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    case DELETE_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case ADD_ITEMS:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    default:
      return state;
  }
}
