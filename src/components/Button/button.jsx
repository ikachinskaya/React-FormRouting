import React from "react";
import styles from "./Button.module.scss";

const Button = ({type, value }) => {
  return (
    <button type={type} className={styles.button} >
      {value}
    </button>
  );
};

export default Button;
