import React, { useContext } from "react";

import styles from "./index.module.scss";

import Header from "../../components/header";
import EmptyList from "../../components/list/emptyList";
import { ModalContext } from "../../components/modal/modalContext";
import FormInput from "../../components/formInput";
import FilledList from "../../components/list/filledList";

const Home = () => {
  const { handleModal } = useContext(ModalContext);

  const aa = [
    {
      name: "Bianca",
      email: "bianca@mail.com",
      phone: "(11) 98432-9263",
      color: "#dfe",
    },
    {
      name: "Alana",
      email: "alana@mail.com",
      phone: "(11) 98432-9263",
      color: "#231",
    },
  ];

  return (
    <div className={styles.home}>
      <Header emptyList={!aa} />
      {!aa ? (
        <EmptyList
          onClick={() =>
            handleModal({
              title: "Criar novo contato",
              element: (
                <React.Fragment>
                  <FormInput
                    className={styles.home_inputSpace}
                    placeholder=""
                    label="Nome"
                    id="name"
                  />
                  <FormInput
                    className={styles.home_inputSpace}
                    placeholder=""
                    label="E-mail"
                    id="email"
                  />
                  <FormInput placeholder="" label="Telefone" id="telefone" />
                </React.Fragment>
              ),
            })
          }
        />
      ) : (
        <FilledList
          onEditClick={() => {
            handleModal({
              title: "Editar contato",
              element: (
                <React.Fragment>
                  <FormInput
                    className={styles.home_inputSpace}
                    placeholder=""
                    label="Nome"
                    id="name"
                  />
                  <FormInput
                    className={styles.home_inputSpace}
                    placeholder=""
                    label="E-mail"
                    id="email"
                  />
                  <FormInput placeholder="" label="Telefone" id="telefone" />
                </React.Fragment>
              ),
            });
          }}
          onDeleteClick={() => {
            handleModal({
              title: "Excluir contato",
              element: (
                <React.Fragment>
                  <span>Deseja realmente excluir o contato?</span>
                </React.Fragment>
              ),
            });
          }}
          contacts={aa}
        />
      )}
    </div>
  );
};

export default Home;
