import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';

function Profile() {
  const { setLoggedIn } = useContext(CurrentUserContext);
  setLoggedIn(true);
  return (
    <>
      <Header />
      <section className="auth">
        <img src={logo} alt="лого" className="header__logo" />
        <h2 className="auth__title">Привет, Виталий!</h2>
        <form className="auth__form">
          <input className="auth__input" type="name" name="name" id="name" placeholder="Имя" required />
          <input className="auth__input" type="email" name="email" id="email" placeholder="Email"
            required />

          <Link to="/sign-in" className="auth__head-link">Редактировать</Link>
          <Link to="/sign-out" className="auth__head-link_red">Выйти из аккаунта</Link>
        </form>
      </section>
    </>
  )
}

export default Profile;
