import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { SIGN_IN_SHEMA } from "../../utils/validationSchemas";
import MyField from "../MyField/myField";
import RadioButton from "../RadioButton/radioButton";
import Checkbox from "../Checkbox/checkbox";
import Button from "../Button/button";
import MyErrorMessage from "../MyErrorMessage/myErrorMessage";
import styles from "./SignUp.module.scss";

const initialState = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  picked: "",
};
const submitHandler = (values, formikBag) => {
  alert("Вы успешно создали аккаунт");
  formikBag.resetForm();
};
const SignUp = () => {
  return (
    <article className={styles.container}>
      <h1 className={styles.heading}>create in account</h1>
      <p className={styles.text}>
        We always keep your name and email address private.
      </p>
      <Formik
        initialValues={initialState}
        validationSchema={SIGN_IN_SHEMA}
        onSubmit={submitHandler}
      >
        <Form className={styles.form}>
          <div className={`${styles.fieldContainer} ${styles.dFlex}`}>
            <MyField name="firstName" type="text" placeholder="First Name" />
            <MyField name="lastName" type="text" placeholder="Last Name" />

            <MyField
              name="displayName"
              type="text"
              placeholder="Display Name"
            />
            <MyField name="email" type="email" placeholder="Email Address" />

            <MyField name="password" type="password" placeholder="Password" />
            <MyField
              name="passwordConfirmation"
              type="password"
              placeholder="Password Confirmation"
            />
          </div>

          <RadioButton
            name="picked"
            value="Join As a Buyer"
            text="I am looking for a Name, Logo or Tagline for my business, brand or product."
          />
          <RadioButton
            name="picked"
            value="Join As a Creative or Marketplace Seller"
            text="I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.
            "
          />

          <div className={styles.wrapperError}>
            <MyErrorMessage name="picked" />
          </div>

          <Checkbox
            value="Allow Squadhelp to send marketing/promotional offers from time to time"
            name="checked"
          />
          <Button type="submit" value="Create account" />
          <p className={styles.termsOfServise}>
            By clicking this button, you agree to our{" "}
            <Link to="#" className={styles.link}>
              {" "}
              Terms of Service
            </Link>
            .
          </p>
        </Form>
      </Formik>
    </article>
  );
};

export default SignUp;
