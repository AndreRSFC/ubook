import React from "react";

import styles from "./index.module.scss";

import SearchIcon from "../../icons/search";

type PropsType = {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  value?: string | number;
};

const SearchInput = ({ placeholder, onChange, value, onClick }: PropsType) => {
  const enterPressed = (e: React.KeyboardEvent) => {
    var code = e.charCode || e.which;
    if (code === 13) {
      onClick && onClick();
    }
  };

  return (
    <div className={styles.input_container}>
      <input
        value={value}
        onChange={(e) => {
          onChange && onChange(e);
        }}
        placeholder={placeholder}
        aria-label={placeholder}
        className={styles.input}
        onKeyPress={enterPressed}
      />
      <button onClick={onClick} className={styles.input_icon}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchInput;
