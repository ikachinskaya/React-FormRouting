import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/loginPage";
import SignUpPage from "../../pages/SignUpPage/signUpPage";
import logo from "../../logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setisLoggedIn(true);
  };
  const handleSignUpClick = () => {
    setisLoggedIn(false);
  };

  return (
    <>
      <header className={`${styles.header} ${styles.dFlex}`}>
        <div className={styles.imgWrapper}>
          <Link
            to={{
              pathname: "https://www.squadhelp.com",
            }}
            target="_blank"
          >
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {isLoggedIn ? (
          <Link className={styles.link} to="login" onClick={handleSignUpClick}>
            Login
          </Link>
        ) : (
          <Link className={styles.link} to="signup" onClick={handleLoginClick}>
            Signup
          </Link>
        )}
      </header>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </>
  );
};

export default Header;
