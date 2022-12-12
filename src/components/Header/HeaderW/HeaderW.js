import logo from '../../images/logo.svg';
import account from '../../images/account.svg';

function HeaderW() {
  return (
    <>
      <header className="header header_white">
        <img src={logo} alt="лого" className="header__logo" />
        <div className="header__button-container">
          <button className="header__button-movies" href="#">Фильмы</button>
          <button className="header__button-saved" href="#">Сохраненные фильмы</button>
          <button className="header__button-signed" href="#"><img src={account} alt="аккаунт" className="header__but-image" />Аккаунт</button>
        </div>
      </header>
    </>
  )
}

export default HeaderW;