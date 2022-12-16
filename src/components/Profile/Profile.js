import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';

function Profile() {
  const { setLoggedIn } = useContext(CurrentUserContext);
  setLoggedIn(true);
  return (
    <>
      <Header />
      <section className="profile">
        <div className='profile__title-container'>
          <h2 className="profile__title">Привет, Виталий!</h2>
        </div>
        <form className="profile__form">
          <label className="profile__input-label">Имя
            <input className='profile__input' type="text" defaultValue="Виталий" id="name"
              minLength="2" maxLength="20" />
          </label>
          <label className="profile__input-label">Email
            <input className='profile__input' type="email" defaultValue="pochta@yandex.ru" name="email" id="email" />
          </label>
          <div className='profile__link-container'>
            <Link to="/sign-in" className="profile__head-link">Редактировать</Link>
            <Link to="/sign-out" className="profile__head-link profile__head-link_red">Выйти из аккаунта</Link>
          </div>
        </form>
      </section>
    </>
  )
}

export default Profile;

//  <section className="profile">
// <h2 className="profile__title">Привет, Виталий!</h2>
// <div className='profile-wrap profile__wrap_line'>
//   <p className='profile__text'>Имя</p>
//   <p className='profile__value'>Виталий</p>
// </div>
// <div className='profile-wrap'>
//   <p className='profile__text'>Email</p>
//   <p className='profile__value'>pochta@yandex.ru</p>
// </div>
// <div className='profile__link-container'>
//   <Link to="/sign-in" className="profile__head-link">Редактировать</Link>
//   <Link to="/sign-out" className="profile__head-link_red">Выйти из аккаунта</Link>
// </div>