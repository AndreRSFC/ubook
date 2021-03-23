import React, { useContext } from "react";
import { createPortal } from "react-dom";

import styles from "./index.module.scss";

import { ModalContext } from "./modalContext";

const Modal = () => {
  const { modalContent, modal } = useContext(ModalContext);

  const modalElement = document.querySelector("#modal-root");

  if (modal) {
    return (
      modalElement &&
      createPortal(
        <div className={styles.modal_container}>{modalContent?.element}</div>,
        modalElement
      )
    );
  } else return null;
};

export default Modal;
