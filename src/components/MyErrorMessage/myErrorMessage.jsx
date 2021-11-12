import React from "react";
import { ErrorMessage } from "formik";
import styles from "./MyErrorMessage.module.scss";

const MyErrorMessage = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(message) => <div className={styles.error}>{message}</div>}
    </ErrorMessage>
  );
};

export default MyErrorMessage;
