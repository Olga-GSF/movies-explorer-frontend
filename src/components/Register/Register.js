import React, { useEffect, useContext, useState, useRef } from "react";
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';
import MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import InfoTooltip from "../InfoToolTip/InfoToolTip";

function Register(props) {
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [isNameError, setIsNameError] = useState(false);
  const [isPassError, setIsPassError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const history = useHistory();
  const { loggedIn, setLoggedIn, setUserData } = useContext(CurrentUserContext);
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

  function handleNameError(evt) {
    if (nameRef.current.value.length >= 2) {
      setIsNameError(false)
    } else {
      setIsNameError(true);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setFormSend(true);
    MainApi.register(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
      .then(data => {
        console.log(data);
        if (data) {
          MainApi.login(emailRef.current.value, passwordRef.current.value)
            .then(dataAuth => {
              console.log(data);
              if (dataAuth.token) {
                setStatus(true);
                localStorage.setItem('jwt', dataAuth.token);
                localStorage.setItem('auth-status', true)
                localStorage.setItem('search-movies', JSON.stringify([]));

                // setCurrentUser(email)
                setLoggedIn(true);
                setInfoTooltipOpen(true)

                MainApi.checkToken(localStorage.getItem('jwt'))
                  .then(data => {
                    console.log(data)
                    if (data) {
                      setUserData(data);
                    }
                  })

                setTimeout(() => {
                  history.push('/movies');
                }, 2000)
              }
            })
            .catch((err) => {
              setStatus(false)
              setInfoTooltipOpen(true) //открываем попап InfoTooltip
              console.log(err);
            })
        }
      })
      .catch((err) => {
        setLoggedIn(false)
        setInfoTooltipOpen(true)
        setFormSend(false)
        console.log(err);
      })
  }

  return (
    <section className="reg">
      <div className='reg__title-container'>
        <Link to='/'>
          <img src={logo} alt="лого" className="header__logo" />
        </Link>
        <h2 className="reg__title">Добро пожаловать!</h2>
      </div>
      <form className="reg__form" onSubmit={handleSubmit}>

        <input className={isNameError ? 'reg__input reg__input-error' : 'reg__input'} type="name" name="name" id="name"
          placeholder="Имя" onChange={() => { handleNameError() }} ref={nameRef} minLength="2" maxLength="20" required />
        {isNameError ? <p className="login__error">Что-то пошло не так...</p> : ''}

        <input className={isEmailError ? 'reg__input reg__input-error' : 'reg__input'} type="email" name="email" id="email" placeholder="Email" onChange={() => { handleEmailError() }} ref={emailRef} required
        />
        {isEmailError ? <p className="login__error">Что-то пошло не так...</p> : ''}

        <input className={isPassError ? 'reg__input reg__input-error' : 'reg__input'} type="password" name="password" id="password" placeholder="Пароль" onChange={() => { handlePasswordError() }} ref={passwordRef} minLength="5" maxLength="12" required
        />
        {isPassError ? <p className="reg__error">Что-то пошло не так...</p> : ''}

        <button className={!isNameError && !isEmailError && !isPassError && nameRef.current.value && emailRef.current.value && passwordRef.current.value && !isFormSend ? 'reg__button' : "reg__button reg__button_disabled"} type="submit"
          disabled={!isEmailError && !isPassError && !isFormSend ? false : true}>Зарегистрироваться</button>

        <div className="reg__head-title">
          <p className="reg__head-text">
            Уже зарегистрированы? <Link to="/sign-in" className="reg__head-link">Войти</Link>
          </p>
        </div>
      </form>
      <InfoTooltip isOpen={isInfoTooltipOpen} status={status} onClose={setInfoTooltipOpen} />
    </section>
  )
}

export default Register;
