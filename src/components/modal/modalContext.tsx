import { createContext } from "react";
import useModal from "./useModal";
import Modal from ".";

const ModalContext = createContext<any>({});

const ModalProvider = ({ children }: any) => {
  const { modal, handleModal, modalContent } = useModal();
  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
