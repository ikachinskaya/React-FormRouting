import React from "react";
import { Field } from "formik";
import MyErrorMessage from "../MyErrorMessage/myErrorMessage";
import cx from "classnames";
import styles from "./MyField.module.scss";

const MyField = ({ name, type, placeholder, loginPage }) => {
  return (
    <Field name={name} type={type}>
      {({ field, form, meta }) => {
        const fieldStyles = cx({
          [styles.field]: !meta.error,
          [styles.fieldError]: meta.error,
          [styles.notError]: !meta.error && meta.touched,
        });
        const inputStyles = cx({
          [styles.loginField]: loginPage,
          [styles.signUpField]: !loginPage,
        });
        return (
          <>
            <div className={inputStyles}>
              <input
                type={type}
                placeholder={placeholder}
                {...field}
                className={fieldStyles}
              />
              <MyErrorMessage name={name} />
            </div>
          </>
        );
      }}
    </Field>
  );
};

export default MyField;
