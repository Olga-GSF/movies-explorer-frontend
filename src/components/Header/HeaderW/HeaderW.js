import account from '../../../images/account.svg';
import React, { useState } from "react";
import Navigation from '../../Navigation/Navigation';
import { Link } from "react-router-dom";

function HeaderW() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      {/* <button className={isVisible ? "nav__burger-button nav__burger-button_close" : "nav_burger-botton"} onClick={() => setIsVisible(!isVisible)}></button>
      <div className={isVisible ? "header__button-container nav__burger-popup" : "nav__burger-popup_close"}>
      </div> */}
      <button className="nav__burger-button" onClick={Navigation}></button>
      <div className={!isVisible ? "header__button-container-white" : "nav__burger-button"}>
        <Link to="/movies" className="header__link" href="#">Фильмы</Link>
        <Link to="/saved-movies" className="header__link" href="#">Сохраненные фильмы</Link>
        <Link to="/profile" className="header__link-account" href="#"><button className="header__link-account-button">Аккаунт</button></Link>
      </div>

    </>
  )
}

export default HeaderW;