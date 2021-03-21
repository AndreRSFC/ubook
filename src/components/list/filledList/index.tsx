import React from "react";
import DeleteIcon from "../../../icons/delete";
import EditIcon from "../../../icons/edit";

import styles from "./index.module.scss";

export type ContactType = {
  name: string;
  email: string;
  phone: string;
  color: string;
};

type PropsType = {
  contacts: ContactType[];
  onEditClick: () => void;
  onDeleteClick: () => void;
};

const FilledList = ({ contacts, onEditClick, onDeleteClick }: PropsType) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.table_headLine}>
          <th
            className={`${styles.table_retreat} ${styles.table_headLineItem}`}
          >
            Contatos
          </th>
          <th className={styles.table_headLineItem}>E-mail</th>
          <th className={styles.table_headLineItem}>Telefone</th>
          <th className={styles.table_headLineItem}></th>
          <th className={styles.table_headLineItem}></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr className={styles.table_bodyLine}>
            <td
              className={`${styles.table_bodyLineItem} ${styles.table_contactLine}`}
            >
              <span
                className={styles.table_circleName}
                style={{
                  background: contact.color,
                }}
              >
                {contact.name.charAt(0)}
              </span>
              {contact.name}
            </td>
            <td className={styles.table_bodyLineItem}>{contact.email}</td>
            <td className={styles.table_bodyLineItem}>{contact.phone}</td>
            <td className={styles.table_icons}>
              <button onClick={onEditClick}>
                <EditIcon />
              </button>
            </td>
            <td
              className={`${styles.table_bodyLineItem} ${styles.table_icons} ${styles.table_icons__last}`}
            >
              <button onClick={onDeleteClick}>
                <DeleteIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FilledList;
