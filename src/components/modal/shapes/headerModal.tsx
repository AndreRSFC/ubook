import React from "react";

import styles from "./index.module.scss";

import Button from "../../button";


type PropsType = {
  title: string;
};

const HeaderModal = ({ title }: PropsType) => {
  return (
    <div className={styles.modal_header}>
      <h1 className={styles.modal_title}>{title}</h1>
    </div>
  );
};

export default HeaderModal;
