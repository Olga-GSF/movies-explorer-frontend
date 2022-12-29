import React, { useContext, useState } from "react";
// import { withRouter } from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logo.svg';
import MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import InfoTooltip from "../InfoToolTip/InfoToolTip";

function Login(props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isPassError, setIsPassError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const history = useHistory();
  const { loggedIn, setLoggedIn, setCurrentUser } = useContext(CurrentUserContext);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [status, setStatus] = useState(false);


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

  function handleSubmit(evt) {
    evt.preventDefault();
    MainApi.login(email, password)
      .then(data => {
        console.log(data);
        if (data.token) {
          setStatus(true);
          localStorage.setItem('jwt', data.token);
          setCurrentUser(email)
          setLoggedIn(true);
          localStorage.setItem('auth-status', true)
          history.push('/movies');
        }
      })
      .catch((err) => {
        setStatus(false)
        setInfoTooltipOpen(true) //открываем попап InfoTooltip
        console.log(err);
      })
  }

  return (

    <>
      <section className="login">
        <div className='login__title-container'>
          <img src={logo} alt="лого" className="header__logo" />
          <h2 className="login__title">Рады видеть!</h2>
        </div>
        <form className="login__form" onSubmit={handleSubmit}>

          <input className={isEmailError ? 'login__input login__input-error' : 'login__input'} type="email" name="email" id="email" placeholder="Email" onChange={handleEmailChange} value={email || ''} onBlur={handleEmailError} required
          />
          {isEmailError ? <p className="login__error">Что-то пошло не так...</p> : ''}

          <input className={isPassError ? 'login__input login__input-error' : 'login__input'} type="password" name="password" id="password" placeholder="Пароль" onChange={handlePasswordChange} onBlur={handlePasswordError} value={password || ''} minLength="5" maxLength="12" required
          />
          {isPassError ? <p className="login__error">Что-то пошло не так...</p> : ''}

          <button className={!isEmailError && !isPassError && password !== '' && email !== '' ? 'login__button' : "login__button login__button_disabled"} type="submit"
            disabled={!isEmailError && !isPassError ? false : true}>Войти</button>
          <div className="login__head-title">
            <p className="login__head-text">
              Ещё не зарегистрированы? <Link to="/sign-up" className="login__head-link">Регистрация</Link>
            </p>
          </div>
        </form>
        <InfoTooltip isOpen={isInfoTooltipOpen} status={status} onClose={setInfoTooltipOpen} />
      </section>
    </>
  )
}

export default Login;
// export default withRouter(Login);
