import line from '../../../images/stroke-about.svg';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h3 className="about-project__title">О проекте</h3>
      <img src={line} alt="линия" className="line" />
      <ul className="about-project__grid-cont-info">
        <li className="about-project__text-tt">
          <h4 className='about-project__text-title'>Дипломный проект включал 5 этапов</h4>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__text-tt">
          <h4 className='about-project__text-title'>На выполнение диплома ушло 5 недель</h4>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="about-project__grid-cont-num">
        <li className="about-project__num-title1">1 неделя</li>
        <li className="about-project__num-title2">4 недели</li>
        <li className="about-project__num">Back-end</li>
        <li className="about-project__num">Front-end</li>
      </ul>
    </section>
  )
}
export default AboutProject;
