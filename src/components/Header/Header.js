import React, { useContext, useState } from "react";
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import HeaderW from "./HeaderW/HeaderW";

function Header({ activePage }) {
  const { loggedIn } = useContext(CurrentUserContext);

  return (
    <header className={loggedIn ? "header header_color_white" : "header"}>
      <img src={logo} alt="лого" className="header__logo" />
      {loggedIn ? <HeaderW activePage={activePage} /> :
        <div className="header__button-container">
          <Link to="/sign-up" className="header__button-signup" href="#">Регистрация</Link>
          <Link to="/sign-in" className="header__button-signin" href="#">Войти</Link>
        </div>
      }
    </header>
  )
}

export default Header;