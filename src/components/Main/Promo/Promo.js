import './Promo.css';
import globus from '../../../images/globus.svg';
import { Link } from 'react-router-dom';
import AboutProject from '../AboutProject/AboutProject';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <img src={globus} alt="глобус" className="promo__image" />
        <div className='promo__wrap'>
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
      </div>
      <Link to='#AboutProject' className="promo__button" href="#">Узнать больше</Link>
    </section>
  )
}

export default Promo;