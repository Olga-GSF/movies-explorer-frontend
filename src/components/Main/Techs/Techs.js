import line from '../../../images/stroke-about.svg';

function Techs() {
  return (
    <>
      <section className="techs">
        <h3 className="techs__title">Технологии</h3>
        <img src={line} alt="линия" className="line" />
        <div className='techs__container'>
          <h2 className="techs__subtitle">7 технологий</h2>
          <p className="techs__info">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
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
    </>
  )
}

export default Techs;