import React from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
