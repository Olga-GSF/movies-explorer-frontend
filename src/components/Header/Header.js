import React from "react";
import logo from '../../images/logo.svg';
import { useLocation, Link } from "react-router-dom";
import './Header.css';

function Header(props) {
  const { pathname } = useLocation();
  const textTitle = `${pathname === '/sign-in' ? 'Регистрация' : 'Войти'}`;
  const path = `${pathname === '/sign-in' ? '/sign-up' : '/sign-in'}`;
  return (
    <header className="header">
      <img src={logo} alt="лого" className="header__logo" />
      <div className="header__button-container">
        <button className="header__button-signup" href="#">Регистрация</button>
        <button className="header__button-signin" href="#">Войти</button>
      </div>
      <div>
        {props.loggedIn ?
          (<div className="header__container">
            <p className="header__user-email">{props.email}</p>
            <Link className="header__exit" to="" onClick={props.onLogOut}>Выйти</Link>
          </div>) : (<Link to={path} className="reg__head-link">{textTitle}</Link>)
        }
      </div>
    </header>
  )
}

export default Header;