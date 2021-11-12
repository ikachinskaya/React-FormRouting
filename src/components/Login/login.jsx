import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { LOGIN_IN_SHEMA } from "../../utils/validationSchemas";
import MyField from "../MyField/myField";
import Checkbox from "../Checkbox/checkbox";
import Button from "../Button/button";
import styles from "./Login.module.scss";

const initialState = {
  email: "",
  password: "",
};

const submitHandler = (values, formikBag) => {
  alert("Вы успешно зарегистрировались");
};
const Login = () => {
  return (
    <article className={styles.container}>
      <h2 className={styles.heading}>login to your account</h2>
      <Formik
        initialValues={initialState}
        validationSchema={LOGIN_IN_SHEMA}
        onSubmit={submitHandler}
      >
        <Form className={styles.form}>
          <MyField
            name="email"
            type="email"
            placeholder="Email address"
            loginPage
          />
          <MyField
            name="password"
            type="password"
            placeholder="Password"
            loginPage
          />

          <div className={`${styles.checkboxContainer} ${styles.dFlex}`}>
            <Checkbox value="Remember Me" name="checked" />
            <div>
              <Link className={styles.link} to="#">
                Forgot Password
              </Link>
            </div>
          </div>

          <Button type="submit" value="LOGIN" />
        </Form>
      </Formik>
    </article>
  );
};

export default Login;
