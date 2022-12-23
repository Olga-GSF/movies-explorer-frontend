import account from '../../../images/account.svg';
import React, { useState } from "react";
import Navigation from '../../Navigation/Navigation';
import { Link } from "react-router-dom";

function HeaderW({ activePage }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <button className="nav__burger-button" onClick={() => setIsVisible(!isVisible)}></button>
      {isVisible ? <Navigation activePage={activePage} setIsVisible={setIsVisible} /> : ''}
      <div className="header__button-container-white">
        <Link to="/movies" className={activePage === 'movies' ? 'header__link header__link_active' : "header__link"} href="#">Фильмы</Link>
        <Link to="/saved-movies" className={activePage === 'saved-movies' ? 'header__link header__link_active' : "header__link"} href="#">Сохраненные фильмы</Link>
        <Link to="/profile" className="header__link-account header__link-account-button" href="#">Аккаунт</Link>
      </div>
      {isVisible ? <div className='nav__overlay' onClick={() => setIsVisible(false)}></div> : ''}

    </>
  )
}

export default HeaderW;

{/* <button className={isVisible ? "nav__burger-button nav__burger-button_close" : "nav_burger-botton"} onClick={() => setIsVisible(!isVisible)}></button>
      <div className={isVisible ? "header__button-container nav__burger-popup" : "nav__burger-popup_close"}>
      </div> */}