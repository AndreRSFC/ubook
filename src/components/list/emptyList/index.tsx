import React from "react";

import styles from "./index.module.scss";

import Button from "../../button";

import EmptyIcon from "../../../icons/emptyList";
import PlusIcon from "../../../icons/plus";

type PropsType = {
  onClick: () => void;
};

const EmptyList = ({ onClick }: PropsType) => (
  <section className={styles.emptyList}>
    <EmptyIcon />
    <h1 className={styles.emptyList_title}>Nenhum contato foi criado ainda.</h1>
    <Button
      text="Criar contato"
      onClick={onClick}
      icon={<PlusIcon />}
      className={styles.emptyList_button}
    />
  </section>
);

export default EmptyList;
