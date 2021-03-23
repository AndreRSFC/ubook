import React from "react";

import styles from "./index.module.scss";

type PropsType = {
  placeholder: string;
  label: string;
  id: string;
  isError?: boolean;
  errorMessage?: string;
  value?: string | number;
  onChange?: (e: string) => void;
  onBlur?: () => void;
  className?: string;
  maxlength?: number;
  type?: string;
  pattern?: string;
};

const FormInput = ({
  label,
  placeholder,
  onChange,
  id,
  className,
  maxlength,
  type,
  pattern,
  value,
  onBlur,
  isError,
  errorMessage,
}: PropsType) => {
  return (
    <div
      className={`${styles.input_container} ${isError ? styles.is_error : ""} ${
        className || ""
      }`}
    >
      <label
        className={`${styles.input_label} ${value ? styles.is_on : ""}`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
        id={id}
        placeholder={placeholder}
        aria-label={placeholder}
        className={styles.input}
        max={maxlength}
        type={type}
        pattern={pattern}
        onBlur={onBlur}
      />
      {isError && (
        <span className={styles.input_errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

export default FormInput;
