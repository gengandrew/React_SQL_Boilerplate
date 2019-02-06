import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from "./types";
import axios from "axios";

const serverHostID = "http://localhost:5000/api/";

export const getItems = () => dispath => {
  dispath(setItemsLoading());
  axios.get("http://localhost:5000/api/getAll").then(res =>
    dispath({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const deleteItems = BookmarkID => {
  return {
    type: DELETE_ITEMS,
    payload: BookmarkID
  };
};

export const addItems = item => dispath => {
  axios.post("http://localhost:5000/api/post_bookmarks", item).then(res =>
    dispath({
      type: ADD_ITEMS,
      payload: res.data
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
