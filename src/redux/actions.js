import shortid from "shortid";

const addContact = (name, number) => ({
  type: "phonebook/addContact",
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = (id) => ({
  type: "phonebook/deleteContact",
  payload: id,
});

const filter = (value) => ({
  type: "phonebook/Filter",
  payload: value,
});

export default { addContact, deleteContact, filter };
