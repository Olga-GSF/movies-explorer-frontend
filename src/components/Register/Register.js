import React, { useContext, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';
// import MainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Register(props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isNameError, setIsNameError] = useState(false);
  const [isPassError, setIsPassError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const history = useHistory();
  const { setLoggedIn, setUserEmail } = useContext(CurrentUserContext);


  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
    if (password.length > 5) {
      setIsPassError(false)
    }
  }

  function handlePasswordError(evt) {
    if (password.length > 5) {
      setIsPassError(false)
    } else {
      setIsPassError(true);
    }
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handleEmailError() {
    if (!emailReg.test(email.toLowerCase())) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
  }

  function handleNameChange(evt) {
    setName(evt.target.value);
    if (name.length > 2) {
      setIsNameError(false)
    }
  }

  function handleNameError(evt) {
    if (name.length > 2) {
      setIsNameError(false)
    } else {
      setIsNameError(true);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    auth.register(name, email, password)
      .then(data => {
        console.log(data);
        if (data) {
          setLoggedIn(true)
          // setInfoTooltipOpen(true)
          history.push('/movies');
        }
      })
      .catch((err) => {
        setLoggedIn(false)
        // setInfoTooltipOpen(true)
        console.log(err);
      })
  }

  return (
    <section className="reg">
      <div className='reg__title-container'>
        <img src={logo} alt="лого" className="header__logo" />
        <h2 className="reg__title">Добро пожаловать!</h2>
      </div>
      <form className="reg__form" onSubmit={handleSubmit}>

        <input className={isNameError ? 'reg__input reg__input-error' : 'reg__input'} type="name" name="name" id="name"
          placeholder="Имя" onChange={handleNameChange} onBlur={handleNameError} value={name || ''} minLength="2" maxLength="20" required />

        <input className={isEmailError ? 'reg__input reg__input-error' : 'reg__input'} type="email" name="email" id="email" placeholder="Email" onChange={handleEmailChange} value={email || ''} onBlur={handleEmailError} required
        />

        <input className={isPassError ? 'reg__input reg__input-error' : 'reg__input'} type="password" name="password" id="password" placeholder="Пароль" onChange={handlePasswordChange} onBlur={handlePasswordError} value={password || ''} minLength="5" maxLength="12" required
        />
        {isPassError || isEmailError ? <p className="reg__error">Что-то пошло не так...</p> : ''}

        <button className={!isEmailError && !isPassError && password !== '' && email !== '' && name !== '' ? 'reg__button' : "reg__button reg__button_disabled"} type="submit"
          disabled={!isEmailError && !isPassError ? false : true}>Зарегистрироваться</button>

        <div className="reg__head-title">
          <p className="reg__head-text">
            Уже зарегистрированы? <Link to="/sign-in" className="reg__head-link">Войти</Link>
          </p>
        </div>
      </form>

    </section>
  )
}

export default Register;

{/* <div className='auth__input-wrap'>
<input className={isActive ? 'auth__input auth__input_active' : 'auth__input'} onClick={() => setIsActive(true)} type="name" name="name" id="name"
placeholder="Имя" onChange={handleNameChange} value={name || ''} minLength="2" maxLength="20" required />
<span class="auth__floating-label">Имя</span>
</div>
<div className='auth__input-wrap'>
<input className={isActive ? 'auth__input auth__input_active' : 'auth__input'} type="email" name="email" id="email"
placeholder="Email" onChange={handleEmailChange} value={email || ''} required />
<span class="auth__floating-label">Email</span>
</div>
<div className='auth__input-wrap'>
<input className={isActive ? 'auth__input auth__input_active' : 'auth__input'} type="password" name="password" id="password" placeholder="Пароль"
onChange={handlePasswordChange} value={password || ''} required minLength="5" maxLength="12" />
<span class="auth__floating-label">Пароль</span>
</div> */}

