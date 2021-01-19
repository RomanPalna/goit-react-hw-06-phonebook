import { createStore } from "redux";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const reducer = (state = initialState, action) => state;

const store = createStore(reducer);

export default store;