import React, { useContext } from "react";
import { createPortal } from "react-dom";
import Button from "../button";

import styles from "./index.module.scss";

import { ModalContext } from "./modalContext";

const Modal = () => {
  let { modalContent, handleModal, modal } = useContext(ModalContext);

  const modalElement = document.querySelector("#modal-root");

  if (modal) {
    return (
      modalElement &&
      createPortal(
        <div className={styles.modal_container}>
          <div className={styles.modal}>
            <div className={styles.modal_header}>
              <h1 className={styles.modal_title}>{modalContent?.title}</h1>
            </div>
            <div className={styles.modal_content}>{modalContent?.element}</div>
            <div className={styles.modal_footer}>
              <Button
                className={styles.modal_buttonCancel}
                text="Cancelar"
                onClick={() => handleModal()}
              />
              <Button
                className={styles.modal_buttonSave}
                text="Salvar"
                onClick={() => handleModal()}
              />
            </div>
          </div>
        </div>,
        modalElement
      )
    );
  } else return null;
};

export default Modal;
