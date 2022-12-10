import React from 'react';
import globus from '../../images/globus.svg';
import line from '../../images/stroke-about.svg';
import photo from '../../images/photo-man.jpg';
import arrow from '../../images/arrow.svg';
import linegray from '../../images/stroke-portfolio.svg';
import Header from '../Header/Header';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main() {
  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <Header />
      <main className="main-content">
        <section className="promo">
          <img src={globus} alt="глобус" className="promo__image" />
          <div className="promo__container">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб-разработки.
            </h1>
            <p className="promo__subtitle">
              Листайте ниже, чтобы узнать больше про этот проект и его создателя.
            </p>
            <button className="promo__button" href="#">Узнать больше</button>
          </div>
        </section>

        <section className="about-project">
          <h3 className="title">О проекте</h3>
          <img src={line} alt="линия" className="line" />
          <ul className="about-project__grid-cont-info">
            <li className="about-project__text-title">Дипломный проект включал 5 этапов</li>
            <li className="about-project__text-title">На выполнение диплома ушло 5 недель</li>
            <li className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</li>
            <li className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</li>
          </ul>
          <ul className="about-project__grid-cont-num">
            <li className="about-project__num-title1">1 неделя</li>
            <li className="about-project__num-title2">4 недели</li>
            <li className="about-project__num">Back-end</li>
            <li className="about-project__num">Front-end</li>
          </ul>
        </section>

        <section className="techs">
          <h3 className="title">Технологии</h3>
          <img src={line} alt="линия" className="line" />
          <h2 className="techs__title">7 технологий</h2>
          <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="techs__grid-cont">
            <li className="techs__cell">HTML</li>
            <li className="techs__cell">CSS</li>
            <li className="techs__cell">JS</li>
            <li className="techs__cell">React</li>
            <li className="techs__cell">Git</li>
            <li className="techs__cell">Express.js</li>
            <li className="techs__cell">mongoDB</li>
          </ul>
        </section>

        <section className="about-me">
          <h3 className="title">Студент</h3>
          <img src={line} alt="линия" className="line" />

          <div className="about-me__info">
            <div className="about-me__info-text">
              <h2 className="about-me__title">Виталий</h2>
              <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
              <p className="about-me__sub-subtitle">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
              <p className="about-me__sub-subtitle-2">Github</p>
            </div>
            <img src={photo} alt="фото" className="about-me__photo" />
          </div>
        </section>

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
        <form className="movies__form" onSubmit={handleSubmit}>
          <input className="movies__input" type="name" name="name" id="name" placeholder="Фильм" onChange={handleNameChange}
            required />
          <button className="movies__button">Найти</button>
          <p className="movies__p">Короткометражки</p>
        </form>
        <button className="movie__button-on-off"></button>
        <img src="../images/stroke-portfolio.svg" alt="линия" className="line-gray" />

        <section className="movies">
          <ul className="movies__container">

            <template id="movie-template">
              <div className="movie__card">
                <div className="movie__title-wrap">
                  <h2 className="movie__title">33 слова о дизайне</h2>
                  <button type="button" aria-label="del" class="movie__button-delete"></button>
                  <p className="movie__long">1ч 47м</p>
                  <div className="movie__save-container">
                    <button type="button" aria-label="save" className="button card__button-save"></button>
                  </div>
                </div>
                <img src="#" alt="фильм" className="movie__image" />
              </div>
            </template>

          </ul>
        </section>

      </main>
    </>
  )
}

export default Main;
