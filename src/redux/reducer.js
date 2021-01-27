import { combineReducers } from "redux";
import Contacts from "../components/Contacts";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contactFinder = ({ items, filter }) =>
  items.find((contact) => contact.name.toLowerCase() === filter.toLowerCase());

const findContactName = (payload, state) => {
  if (payload.name) {
    return contactFinder
      ? alert(`${payload.name} is already in contact list!`)
      : [payload, ...state];
  }
};
const items = (state = initialState, { type, payload }) => {
  switch (type) {
    case "phonebook/addContact":
      return findContactName(payload, state) ?? state;

    case "phonebook/deleteContact":
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case "phonebook/Filter":
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
