import React, { useState } from "react";
// import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

function MoviesCard({ nameRU, image, trailerLink, duration }) {
  const [isSaved, setIsSaved] = useState(false);
  // const currentUser = React.useContext(CurrentUserContext)

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  };

  return (
    <li className="movie__card">
      <div className="movie__title-wrap">
        <div className="movie__title-container">
          <h2 className="movie__title">{nameRU}</h2>
          <p className="movie__duration">{getTimeFromMins(duration)}</p>
        </div>
        <button onClick={() => setIsSaved(!isSaved)} type="button" aria-label="save" className={isSaved ? "movie__button-save movie__button-save_active" : "movie__button-save"}></button>

      </div>
      <a className="movie__trailer-link" href={trailerLink}>
        <img src={'https://api.nomoreparties.co' + image.url} alt="фильм" className="movie__image" />
      </a>
    </li>
  )
}

export default MoviesCard;