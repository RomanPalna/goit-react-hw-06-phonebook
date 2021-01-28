import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/actions";

export default function Contacts() {
  const contacts = useSelector((state) =>
    showContact(state.contacts.items, state.contacts.filter)
  );
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            type="button"
            onClick={() => dispatch(actions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

const showContact = (allContacts, filter) => {
  const normalizeName = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeName)
  );
};
