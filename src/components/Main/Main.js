import React, { useContext } from "react";

import Header from '../Header/Header';
import Promo from '../Main/Promo/Promo';
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from '../Main/Techs/Techs';
import AboutMe from '../Main/AboutMe/AboutMe';
import Portfolio from '../Main/Portfolio/Portfolio';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main() {
  const { setLoggedIn } = useContext(CurrentUserContext);
  setLoggedIn(false)

  return (
    <>
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />

    </>
  )
}

export default Main;
