import React, { createContext } from "react";
import useModal from "./useModal";
import Modal from ".";

const ModalContext = createContext<any>({});

let ModalProvider = ({ children }: any) => {
  let { modal, handleModal, modalContent } = useModal();
  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
