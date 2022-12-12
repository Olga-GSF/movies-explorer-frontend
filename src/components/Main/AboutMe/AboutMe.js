import line from '../../../images/stroke-about.svg';
import photo from '../../../images/photo-man.jpg';

function AboutMe() {
  return (
    <>
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
    </>
  )
}

export default AboutMe;