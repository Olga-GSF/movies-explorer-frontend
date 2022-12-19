import './Footer.css';
import linegray from '../../images/stroke-portfolio.svg';

function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      <img src={linegray} alt="линия" className="line-gray" />
      <div className="footer__cont-1">
        <p className="footer__text-copyright">&copy; 2020</p>
        <div className="footer__cont-2">
          <p className="footer__text">Яндекс.Практикум</p>
          <p className="footer__text">Github</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer;