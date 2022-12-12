import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <section className="navigation">
        <button className="navigation__button-delete" href="#"></button>
        <ul className="navigation__container">
          <li className="navigation-item">
            <Link to="/" className="navigation__point">Главная</Link>
          </li>
          <li className="navigation-item">
            <Link to="/movies" className="navigation__point">Фильмы</Link>
          </li>
          <li className="navigation-item">
            <Link to="/savedmovies" className="navigation__point">Сохраненные фильмы</Link>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Navigation;