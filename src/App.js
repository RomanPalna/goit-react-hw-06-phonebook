import React, { useState, useEffect } from "react";

import Phonebook from "./components/Phonebook";
import Contacts from "./components/Contacts";
import Finder from "./components/Finder";

// const сontactFinder = (contacts, contact) =>
//   contacts.find(
//     (item) => item.name.toLowerCase() === contact.name.toLowerCase()
//   );

export default function App() {
  // useEffect(() => {
  //   setContacts(JSON.parse(localStorage.getItem("contacts")));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (name, number) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };
  //   const findContactName = сontactFinder(contacts, contact);

  //   if (contact.name) {
  //     findContactName
  //       ? alert(`${contact.name} is already in contact list!`)
  //       : setContacts([contact, ...contacts]);
  //   }
  // };

  return (
    <div>
      <h2>Phonebook</h2>
      <Phonebook />

      <h2>Contacts</h2>
      <Finder />
      <Contacts />
    </div>
  );
}
