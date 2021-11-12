import React from "react";
import { Field } from "formik";
import styles from "./RadioButton.module.scss";

const RadioButton = ({ name, value, text }) => {
  return (
    <label className={styles.containerRadioButton}>
      <div className={styles.dFlex}>
        <Field
          type="radio"
          name={name}
          value={value}
          className={styles.radio}
        />
        <p>{value}</p>
      </div>

      <div className={styles.text}> {text}</div>
    </label>
  );
};

export default RadioButton;
