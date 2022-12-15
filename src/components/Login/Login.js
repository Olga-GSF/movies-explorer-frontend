import { useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login(props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.handleLogin(
      email,
      password
    );
  }

  return (
    <>
      <section className="auth">
        <div className='auth__title-container'>
          <img src={logo} alt="лого" className="header__logo" />
          <h2 className="auth__title">Рады видеть!</h2>
        </div>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input className="auth__input" type="email" name="email" id="email" placeholder="Email" onChange={handleEmailChange} value={email || ''} required
          />
          <input className="auth__input" type="password" name="password" id="password" placeholder="Пароль" onChange={handlePasswordChange} value={password || ''} minLength="5" maxLength="12" required
          />
          <button className="auth__button" type="submit">Войти</button>
          <div className="auth__head-title">
            <p className="auth__head-text">
              Ещё не зарегистрированы? <Link to="/sign-in" className="auth__head-link">Регистрация</Link>
            </p>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login;
// export default withRouter(Login);
