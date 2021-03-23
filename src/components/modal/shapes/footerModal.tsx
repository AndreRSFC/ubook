import React from "react";

import styles from "./index.module.scss";

import Button from "../../button";

type ButtonType = {
  onClick?: () => void;
  label: string;
};

type PropsType = {
  buttons: {
    right: ButtonType;
    left: ButtonType;
  };
};

const FooterModal = ({ buttons }: PropsType) => {
  return (
    <div className={styles.modal_footer}>
      <Button
        className={styles.modal_buttonCancel}
        text={buttons.left.label}
        onClick={() => {
          buttons.left.onClick && buttons.left.onClick();
        }}
      />
      <Button
        className={styles.modal_buttonSave}
        text={buttons.right.label}
        onClick={() => {
          buttons.right.onClick && buttons.right.onClick();
        }}
      />
    </div>
  );
};

export default FooterModal;
