import React from "react";
import { Field } from "formik";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ name, value }) => {
  return (
    <label className={`${styles.checkboxWrapper} ${styles.dFlex}`}>
      <Field
        type="checkbox"
        name={name}
        value={value}
        className={styles.checkbox}
      />
      <div className={styles.text}>{value}</div>
    </label>
  );
};

export default Checkbox;
