import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";

import styles from "./index.module.scss";
import { ModalContext } from "../modalContext";

import FormInput from "../../formInput";

import { generateRandomColor } from "../../../lib/generateRandomColor";

import { ContactsContextValue } from "../../../contexts/contactContext";
import FooterModal from "./footerModal";
import HeaderModal from "./headerModal";

type PropsType = {
  title: string;
  initialName?: string;
  initialEmail?: string;
  initialPhone?: string;
  initialId?: string;
  initialColor?: string;
  edit?: boolean;
};

const FormModalShape = ({
  initialName,
  initialEmail,
  initialPhone,
  initialId,
  initialColor,
  edit,
}: PropsType) => {
  const { setContactsContext, editContact } = ContactsContextValue();
  const { handleModal } = useContext(ModalContext);

  const [name, setName] = useState<string>(initialName || "");
  const [email, setEmail] = useState<string>(initialEmail || "");
  const [phone, setPhone] = useState<string>(initialPhone || "");

  return (
    <div className={styles.modal}>
      <HeaderModal title={"Criar novo contato"} />
      <div className={styles.modal_content}>
        <FormInput
          placeholder=""
          label="Nome"
          id="name"
          value={name}
          onChange={(e) => setName(e)}
        />
        <FormInput
          placeholder=""
          label="E-mail"
          id="email"
          value={email}
          onChange={(e) => setEmail(e)}
        />
        <FormInput
          placeholder=""
          label="Telefone"
          id="telefone"
          value={phone}
          onChange={(e) => setPhone(e)}
        />
      </div>
      <FooterModal
        buttons={{
          left: { label: "Cancelar", onClick: handleModal },
          right: {
            label: edit ? "Editar" : "Adicionar",
            onClick: () => {
              edit && initialId && initialColor
                ? editContact({
                    name,
                    email,
                    phone,
                    color: initialColor,
                    id: initialId,
                  })
                : setContactsContext({
                    name,
                    email,
                    phone,
                    color: generateRandomColor(),
                    id: uuid(),
                  });
              handleModal();
            },
          },
        }}
      />
    </div>
  );
};

export default FormModalShape;
