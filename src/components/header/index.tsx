import React, { useContext } from "react";

import styles from "./index.module.scss";

import Button from "../button";
import SearchInput from "../searchInput";

import UBookIcon from "../../icons/ubook";
import PlusIcon from "../../icons/plus";
import FormModalShape from "../modal/shapes/formModalShape";
import { ModalContext } from "../modal/modalContext";

type Propstype = {
  emptyList?: boolean;
};

const Header = ({ emptyList }: Propstype) => {
  const { handleModal } = useContext(ModalContext);

  return (
    <header className={styles.header}>
      <UBookIcon />
      {emptyList ? (
        <div className={styles.header_buttonSpace} />
      ) : (
        <Button
          text="Criar contato"
          icon={<PlusIcon />}
          onClick={() =>
            handleModal({
              element: <FormModalShape title="Adicionar contato" />,
            })
          }
          className={styles.header_buttonSpace}
        />
      )}
      <SearchInput
        onClick={() => alert("Teste")}
        onChange={(e) => console.log(e.target.value)}
        placeholder="Buscar..."
      />
    </header>
  );
};

export default Header;
