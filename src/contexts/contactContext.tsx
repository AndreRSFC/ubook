import React, { createContext, useState } from "react";

import { ContactType } from "../components/list/filledList";

type ParticipantContextType = {
  contacts: ContactType[];
  setContactsContext: (contact: ContactType) => void;
  removeContact: (id: string) => void;
  editContact: (contact: ContactType) => void;
};

export const contactsContext = createContext<ParticipantContextType>({
  contacts: [],
  setContactsContext: () => {},
  removeContact: () => {},
  editContact: () => {},
});

const { Provider } = contactsContext;

export const ContactsContextProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [contacts, setcontacts] = useState<ContactType[]>([]);

  const setContactsContext = (contact: ContactType) => {
    setcontacts([...contacts, contact]);
  };

  const removeContact = (id: string) => {
    const itemsWithRemoved = contacts.filter((contact) => contact.id !== id);
    setcontacts(itemsWithRemoved);
  };

  const editContact = (contact: ContactType) => {
    const editedContacts = contacts.map((currentContact) =>
      currentContact.id === contact.id ? contact : currentContact
    );
    setcontacts(editedContacts);
  };

  return (
    <Provider value={{ contacts, setContactsContext, removeContact, editContact }}>
      {children}
    </Provider>
  );
};

export const ContactsContextValue = () => React.useContext(contactsContext);
