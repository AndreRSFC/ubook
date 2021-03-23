import { useState } from "react";

export type ContextContent = {
  element: Element;
};

export default () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState<ContextContent>();

  const handleModal = (content: ContextContent) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, modalContent };
};
