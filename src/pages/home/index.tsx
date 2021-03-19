import React, { useContext } from "react";

import styles from "./index.module.scss";

import Header from "../../components/header";
import EmptyList from "../../components/list/emptyList";
import { ModalContext } from "../../components/modal/modalContext";
import FormInput from "../../components/formInput";

const Home = () => {
  const { handleModal } = useContext(ModalContext);

  return (
    <div className={styles.home}>
      <Header emptyList={true} />
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
    </div>
  );
};

export default Home;
