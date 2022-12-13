import arrow from '../../../images/arrow.svg';
import linegray from '../../../images/stroke-portfolio.svg';

function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <h4 className="portfolio__title">Портфолио</h4>
        <div className="portfolio__container">
          <ul className="portfolio__items">
            <li><a className="portfolio__link" href='https://github.com/Olga-GSF' rel="noreferrer" target="_blank">Статичный сайт</a></li>
            <img src={linegray} alt="линия" className="line-gray" />
            <li><a className="portfolio__link" href='https://github.com/Olga-GSF' rel="noreferrer" target="_blank">Адаптивный сайт</a></li>
            <img src={linegray} alt="линия" className="line-gray" />
            <li><a className="portfolio__link" href='https://github.com/Olga-GSF' rel="noreferrer" target="_blank">Одностраничное приложение</a></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Portfolio;