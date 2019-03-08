import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from "./types";
import axios from "axios";

const serverHostID = "http://localhost:5000/api/";

/*
  Middlewear http request to initialize the middlewears datastructure,
  additionally will format the http outputs into defined middlewear's datastructure
  Format is given as follows:
    items: [
    {
      CatagoryName: "",
      CatagoryID: "",
      Bookmarks: [...]
    },
    {
      CatagoryName: "",
      CatagoryID: "",
      Bookmarks: [...]
    }
    ]
*/
export const getItems = () => dispath => {
  dispath(setItemsLoading());
  axios.get("http://localhost:5000/api/getCategoryList/1").then(res => {
    let categorylist = res.data.data;
    let out = [];
    for (let i = 0; i < categorylist.length; i++) {
      let { CategoryName, CategoryID } = categorylist[i];
      let catObj = {
        CategoryName: CategoryName,
        CategoryID: CategoryID,
        Bookmarks: []
      };
      let arr = [];
      axios
        .get(`http://localhost:5000/api/getCategoryBookmarks/${CategoryID}`)
        .then(res => {
          let placeHolder = res.data.data;
          for (let j = 0; j < placeHolder.length; j++) {
            let { BookmarkID } = placeHolder[j];

            axios
              .get(`http://localhost:5000/api/getBookmark/${BookmarkID}`)
              .then(res => {
                let placeHolder2 = res.data.data;
                arr.push(placeHolder2); // Pushes an object rather than a array.length = 1
              });
          }
        });
      catObj.Bookmarks = arr;
      out.push(catObj);
    }
    dispath({
      type: GET_ITEMS,
      payload: out
    });
  });
};
/*
export const getItems = () => dispath => {
  dispath(setItemsLoading());
  axios.get("http://localhost:5000/api/getAll").then(res =>
    dispath({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};
*/
export const deleteItems = BookmarkID => dispath => {
  axios.delete(`http://localhost:5000/api/delete/${BookmarkID}`).then(res => {
    dispath({
      type: DELETE_ITEMS,
      payload: BookmarkID
    });
  });
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

export const addAppDatabase = item => dispath => {
  axios.post("http://localhost:5000/api/post_Database", item).then(res => {
    //onsole.log(res.data);
  });
};

export const changeToAppDB = item => dispath => {
  axios.post("http://localhost:5000/api/changeToAppDB", item).then(res => {
    console.log(item);
  });
};

export const getAllTables = () => dispath => {
  return axios.get("http://localhost:5000/api/getAllTables").then(res => {
    console.log("This is res data");
    console.log(res.data);
    if(res === null){
      return 0;
    } else {
      return 1;
    }
  });
};

export const init_database = item => dispatch => {
  return axios.get("http://localhost:5000/api2/init_database", item).then(res => {
    console.log(res.data);
    return 1;
  })
}
