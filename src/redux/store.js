import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import PhonebookReducer from "./reducer";

const rootReducer = combineReducers({
  contacts: PhonebookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
