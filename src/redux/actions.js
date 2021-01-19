export const addContact = (id, name, number) => ({
  type: "phonebook/addContact",
  payload: {
    id,
    name,
    number,
  },
});

export const deleteContact = (id) => ({
  type: "phonebook/deleteContact",
  payload: id,
});

export const filter = (value) => ({
  type: "phonebook/Filter",
  payload: value,
});
