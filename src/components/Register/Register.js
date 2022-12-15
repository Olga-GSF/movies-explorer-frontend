import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

function Register(props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.handleRegistration(
      name,
      email,
      password
    );
  }

  return (
    <section className="auth">
      <div className='auth__title-container'>
        <img src={logo} alt="лого" className="header__logo" />
        <h2 className="auth__title">Добро пожаловать!</h2>
      </div>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input className="auth__input" type="name" name="name" id="name"
          placeholder="Имя" onChange={handleNameChange} value={name || ''} minLength="2" maxLength="20" required />
        <input className="auth__input" type="email" name="email" id="email"
          placeholder="Email" onChange={handleEmailChange} value={email || ''} required />
        <input className="auth__input" type="password" name="password" id="password" placeholder="Пароль"
          onChange={handlePasswordChange} value={password || ''} required minLength="5" maxLength="12" />
        <button className="auth__button" type="submit">Зарегистрироваться</button>

        <div className="auth__head-title">
          <p className="auth__head-text">
            Уже зарегистрированы? <Link to="/sign-in" className="auth__head-link">Войти</Link>
          </p>
        </div>
      </form>

    </section>
  )
}

export default Register;