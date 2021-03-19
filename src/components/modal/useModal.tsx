import React, { useState } from "react";

type PropsType = {
  title: string;
  element: Element;
};

export default () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState<PropsType>();

  const handleModal = (content: PropsType) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, modalContent };
};
