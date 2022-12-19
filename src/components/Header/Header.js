import React, { useContext, useState } from "react";
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import HeaderW from "./HeaderW/HeaderW";

function Header({ activePage }) {
  const { loggedIn } = useContext(CurrentUserContext);

  return (
    <header className={loggedIn && activePage !== 'main' ? "header header_color_white" : "header"}>
      <Link to='/'>
        <img src={logo} alt="лого" className="header__logo" />
      </Link>
      {loggedIn ? <HeaderW activePage={activePage} /> :
        <div className="header__button-container">
          <Link to="/sign-up" className="header__button-signup">Регистрация</Link>
          <Link to="/sign-in" className="header__button-signin">Войти</Link>
        </div>
      }
    </header>
  )
}

export default Header;