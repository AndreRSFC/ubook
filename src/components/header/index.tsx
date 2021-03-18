import React from "react";

import styles from "./index.module.scss";

import Button from "../button";
import SearchInput from "../searchInput";

import UBookIcon from "../../icons/ubook";
import PlusIcon from "../../icons/plus";

type Propstype = {
  emptyList?: boolean;
};

const Header = ({ emptyList }: Propstype) => {
  return (
    <header className={styles.header}>
      <UBookIcon />
      {emptyList ? (
        <div className={styles.header_buttonSpace}/>
      ) : (
        <Button
          text="Criar contato"
          icon={<PlusIcon />}
          onClick={() => alert("Criar contato")}
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
