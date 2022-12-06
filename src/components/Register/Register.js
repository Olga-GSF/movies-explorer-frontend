import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

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
    <section className="register">
      <img src={logo} alt="лого" className="header__logo" />
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <input className="register__input" type="name" name="name" id="name"
          placeholder="Имя" onChange={handleNameChange} value={name || ''} required />
        <input className="register__input" type="email" name="email" id="email"
          placeholder="Email" onChange={handleEmailChange} value={email || ''} required />
        <input className="register__input" type="password" name="password" id="password" placeholder="Пароль"
          onChange={handlePasswordChange} value={password || ''} required minLength="5" maxLength="12" />
        <button className="register__button" type="submit">Зарегистрироваться</button>

        <div className="register__head-title">
          <p className="register__head-text">
            Уже зарегистрированы? <Link to="/sign-in" className="register__head-link">Войти</Link>
          </p>
        </div>
      </form>

    </section>
  )
}

export default Register;