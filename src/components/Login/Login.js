import React, { useEffect, useContext, useState, useRef } from "react";
// import { withRouter } from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logo.svg';
import MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import InfoTooltip from "../InfoToolTip/InfoToolTip";

function Login(props) {
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [isPassError, setIsPassError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const history = useHistory();
  const { loggedIn, setLoggedIn, setCurrentUser, setUserData } = useContext(CurrentUserContext);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [isFormSend, setFormSend] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      history.push('/');
    }
  }, [])

  function handlePasswordError(evt) {
    if (passwordRef.current.value.length > 5) {
      setIsPassError(false)
    } else {
      setIsPassError(true);
    }
  }

  function handleEmailError() {
    if (!emailReg.test(emailRef.current.value.toLowerCase())) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
    setFormSend(true);
    MainApi.login(emailRef.current.value, passwordRef.current.value)
      .then(data => {
        console.log(data);
        if (data) {
          setStatus(true);
          localStorage.setItem('jwt', data.token);
          setCurrentUser(emailRef.current.value)
          setLoggedIn(true);
          localStorage.setItem('auth-status', true)
          localStorage.setItem('search-movies', JSON.stringify([]));
          history.push('/movies');

          MainApi.checkToken(localStorage.getItem('jwt'))
            .then(data => {
              console.log(data)
              if (data) {
                setUserData(data);
              }
            })

        }
      })
      .catch((err) => {
        setStatus(false)
        setFormSend(false)
        setInfoTooltipOpen(true) //открываем попап InfoTooltip
        console.log(err);
      })
  }

  return (

    <>
      <section className="login">
        <div className='login__title-container'>
          <Link to='/'>
            <img src={logo} alt="лого" className="header__logo" />
          </Link>
          <h2 className="login__title">Рады видеть!</h2>
        </div>
        <form className="login__form" onSubmit={handleSubmit}>

          <input className={isEmailError ? 'login__input login__input-error' : 'login__input'} type="email" name="email" id="email" placeholder="Email" onChange={() => { handleEmailError() }} ref={emailRef} required
          />
          {isEmailError ? <p className="login__error">Что-то пошло не так...</p> : ''}

          <input className={isPassError ? 'login__input login__input-error' : 'login__input'} type="password" name="password" id="password" placeholder="Пароль" onChange={() => { handlePasswordError() }} ref={passwordRef} minLength="5" maxLength="12" required
          />
          {isPassError ? <p className="login__error">Что-то пошло не так...</p> : ''}

          <button className={!isEmailError && !isPassError && emailRef.current.value && passwordRef.current.value && !isFormSend ? 'login__button' : "login__button login__button_disabled"} type="submit"
            disabled={!isEmailError && !isPassError && !isFormSend ? false : true}>Войти</button>


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
