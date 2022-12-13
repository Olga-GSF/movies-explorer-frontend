import account from '../../../images/account.svg';
import React, { useState } from "react";

function HeaderW() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <button className={isVisible ? "header__burger header__burger_close" : "header__burger"} onClick={() => setIsVisible(!isVisible)}>бургер</button>
      <div className={isVisible ? "header__button-container header__burger-popup" : "header__burger-popup_close"}>
        <button className="header__button-movies" href="#">Фильмы</button>
        <button className="header__button-saved" href="#">Сохраненные фильмы</button>
        <button className="header__button-signed" href="#"><img src={account} alt="аккаунт" className="header__but-image" />Аккаунт</button>
      </div>

    </>
  )
}

export default HeaderW;