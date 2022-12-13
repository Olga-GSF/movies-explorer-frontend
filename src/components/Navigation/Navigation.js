import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <section className="nav-burger-popup">
        <button className="nav__burger-cross-button"></button>
        <ul className="nav__container">
          <li className="nav-item">
            <Link to="/" className="nav__link">Главная</Link>
          </li>
          <li className="nav-item">
            <Link to="/movies" className="nav__link">Фильмы</Link>
          </li>
          <li className="nav-item">
            <Link to="/savedmovies" className="nav__link">Сохраненные фильмы</Link>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Navigation;