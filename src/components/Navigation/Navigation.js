import { Link } from 'react-router-dom';
// import './Navigation.css';

function Navigation({ setIsVisible, activePage }) {
  return (
    <>
      <div className="nav__burger-popup">
        <button className="nav__burger-cross-button" onClick={() => setIsVisible(false)}></button>
        <ul className="nav__items">
          <li className="nav-item">
            <Link to="/" className="nav__link">Главная</Link>
          </li>
          <li className="nav-item">
            <Link to="/movies" className={activePage === 'movies' ? 'nav__link nav__link_active' : "nav__link"}>Фильмы</Link>
          </li>
          <li className="nav-item">
            <Link to="/saved-movies" className={activePage === 'saved-movies' ? 'nav__link nav__link_active' : "nav__link"}>Сохраненные фильмы</Link>
          </li>
        </ul>
        <Link to="/profile" className="header__link-account header__link-account-button" href="#">Аккаунт</Link>
      </div>
    </>
  )
}

export default Navigation;
