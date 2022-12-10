import React from 'react';

function Navigator() {

  // const [loggedIn, setLoggedIn] = useState(false);
  // const history = useHistory();


  return (
    <>
      <div className="header__button-container">
        <button className="header__button-signup" href="#">Регистрация</button>
        <button className="header__button-signin" href="#">Войти</button>
      </div>
      <div>
        {props.loggedIn ?
          (<div className="header__container">
            <p className="header__user-email">{props.email}</p>
            <Link className="header__exit" to="" onClick={props.onLogOut}>Выйти</Link>
          </div>) : (<Link to={path} className="reg__head-link">{textTitle}</Link>)
        }
      </div>
    </>
  );
}

export default Navigator;