import React from "react";

import styles from "./index.module.scss";

type PropsType = {
  text: string;
  onClick: () => void;
  className?: string;
  icon?: JSX.Element;
  disabled?: boolean;
};

const Button = ({ text, onClick, icon, disabled, className }: PropsType) => {
  return (
    <button
      className={`${styles.button} ${className ? className : ""}`}
      disabled={disabled}
      onClick={onClick}
      aria-label={text}
    >
      {icon}
      <span
        className={`${styles.button_text} ${
          icon && styles.button_text__iconSpace
        }`}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
