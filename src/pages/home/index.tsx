import React, { useContext, useEffect, useState } from "react";

import styles from "./index.module.scss";

import Header from "../../components/header";
import EmptyList from "../../components/list/emptyList";
import { ModalContext } from "../../components/modal/modalContext";
import FilledList from "../../components/list/filledList";

import { ContactsContextValue } from "../../contexts/contactContext";
import FormModalShape from "../../components/modal/shapes/formModalShape";
import DeleteModal from "../../components/modal/shapes/deleteModal";

const Home = () => {
  const [haveContact, setHaveContact] = useState<boolean>(false);
  const { handleModal } = useContext(ModalContext);
  const { contacts } = ContactsContextValue();

  useEffect(() => {
    setHaveContact(contacts && contacts.length > 0);
  }, [contacts]);

  return (
    <div className={styles.home}>
      <Header emptyList={!haveContact} />
      {!haveContact ? (
        <EmptyList
          onClick={() =>
            handleModal({
              element: <FormModalShape title="Adicionar contato" />,
            })
          }
        />
      ) : (
        <FilledList
          onEditClick={(name, email, phone, id, color) =>
            handleModal({
              element: (
                <FormModalShape
                  title="Editar contato"
                  initialName={name}
                  initialEmail={email}
                  initialPhone={phone}
                  initialId={id}
                  initialColor={color}
                  edit={true}
                />
              ),
            })
          }
          onDeleteClick={(id) => {
            handleModal({
              element: <DeleteModal id={id}/>,
            });
          }}
          contacts={contacts}
        />
      )}
    </div>
  );
};

export default Home;
