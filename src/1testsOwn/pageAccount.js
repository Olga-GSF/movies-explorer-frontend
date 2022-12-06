import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import * as auth from '../../utils/Auth/auth';

function Account() {

  return (
    <section className="auth">
      <img src={logo} alt="лого" className="header__logo" />
      <h2 className="auth__title">Привет, Виталий!</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input className="auth__input" type="name" name="name" id="name" placeholder="Имя" onChange={handleNameChange}
          value={name || ''} required />
        <input className="auth__input" type="email" name="email" id="email" placeholder="Email"
          onChange={handleEmailChange} value={email || ''} required />

        <div className="auth__head-title">
          <Link to="/sign-in" className="auth__head-link">Редактировать</Link>
          <Link to="/sign-in" className="auth__head-link_red">Выйти из аккаунта</Link>
        </div>
      </form>

    </section>
  );
}