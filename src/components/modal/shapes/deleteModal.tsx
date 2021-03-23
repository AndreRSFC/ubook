import { useContext } from "react";

import styles from "./index.module.scss";
import { ModalContext } from "../modalContext";

import { ContactsContextValue } from "../../../contexts/contactContext";
import FooterModal from "./footerModal";
import HeaderModal from "./headerModal";

type PropsType = {
  id: string;
};

const DeleteModal = ({ id }: PropsType) => {
  const { removeContact } = ContactsContextValue();
  const { handleModal } = useContext(ModalContext);

  return (
    <div className={styles.modal}>
      <HeaderModal title={"Criar novo contato"} />
      <div className={`${styles.modal_content} ${styles.modal_delete}`}>
        <span className={styles.modal_deleteTitle}>
          Deseja realmente excluir o contato?
        </span>
      </div>
      <FooterModal
        buttons={{
          left: { label: "Cancelar", onClick: handleModal },
          right: {
            label: "Excluir",
            onClick: () => {
              removeContact(id);
              handleModal();
            },
          },
        }}
      />
    </div>
  );
};

export default DeleteModal;
