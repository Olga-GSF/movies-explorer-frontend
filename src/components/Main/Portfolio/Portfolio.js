import arrow from '../../../images/arrow.svg';
import linegray from '../../../images/stroke-portfolio.svg';

function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <h4 className="portfolio__title">Портфолио</h4>
        <div className="portfolio__container">
          <ul className="portfolio__items">
            <li className="portfolio__point">Статичный сайт</li>
            <img src={linegray} alt="линия" className="line-gray" />
            <li className="portfolio__point">Адаптивный сайт</li>
            <img src={linegray} alt="линия" className="line-gray" />
            <li className="portfolio__point">Одностраничное приложение</li>
          </ul>
          <ul className="portfolio__items">
            <img src={arrow} alt="стрелка" className="portfolio__arrow" />
            <img src={arrow} alt="стрелка" className="portfolio__arrow" />
            <img src={arrow} alt="стрелка" className="portfolio__arrow" />
          </ul>
        </div>
      </section>
    </>
  )
}

export default Portfolio;