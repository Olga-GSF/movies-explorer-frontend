import './Promo.css';
import globus from '../../../images/globus.svg';
import { Link } from 'react-router-dom';
import AboutProject from '../AboutProject/AboutProject';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrap">
        <img src={globus} alt="глобус" className="promo__image" />
        <div className="promo__container">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <Link to={AboutProject} className="promo__button" href="#">Узнать больше</Link>
        </div>
      </div>
    </section>
  )
}

export default Promo;