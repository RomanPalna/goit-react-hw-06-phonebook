import React, { useState, useEffect } from "react";

import Phonebook from "./components/Phonebook";
import Contacts from "./components/Contacts";
import Finder from "./components/Finder";

const сontactFinder = (contacts, contact) =>
  contacts.find(
    (item) => item.name.toLowerCase() === contact.name.toLowerCase()
  );

export default function App() {
  // const [contacts, setContacts] = useState([
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ]);
  // const [filter, setFilter] = useState("");

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

  // const findContact = (e) => {
  //   setFilter(e.currentTarget.value);
  // };

  // const showContact = () => {
  //   const normalizeName = filter.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizeName)
  //   );
  // };

  // const deleteContact = (contactId) => {
  //   setContacts(contacts.filter((contact) => contact.id !== contactId));
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
