import React from "react";

import Phonebook from "./components/Phonebook";
import Contacts from "./components/Contacts";
import Finder from "./components/Finder";

export default function App() {
  // useEffect(() => {
  //   setContacts(JSON.parse(localStorage.getItem("contacts")));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

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
