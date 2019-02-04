import {
  GET_ITEMS,
  ADD_ITEMS,
  DELETE_ITEMS,
  ITEMS_LOADING
} from "../actions/types";

const initialState = {
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload.data,
        loading: false
      };
    case DELETE_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => item.BookmarkID !== action.payload)
      };
    case ADD_ITEMS:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
