import React, { useState } from "react";
// import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import MainApi from "../../utils/MainApi";
import { useLocation } from "react-router-dom";

function MoviesCard({ nameRU, image, trailerLink, duration, id, card, deleteRerender, setDeleteRerender }) {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation().pathname;
  const savedMovies = (location === '/saved-movies') ? true : false;
  // const currentUser = React.useContext(CurrentUserContext)

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  };

  const handleSavedMovie = (movie) => {
    console.log(movie)
    MainApi.saveMovie(movie)
      .then(data => console.log(data))
  }

  const deleteSaveMovie = (id) => {
    // console.log(savedMoviesArr)
    // setSavedMoviesArr(() => {
    //   savedMoviesArr.map((el, i) => {
    //     if (el._id === id) savedMoviesArr.splice(i, 1)
    //   })
    // })
    MainApi.deleteMovie(id)
      .then(data => { setDeleteRerender(deleteRerender + 1) })
  }

  console.log(card);

  return (
    <li className="movie__card">
      <div className="movie__title-wrap">
        <div className="movie__title-container">
          <h2 className="movie__title">{nameRU}</h2>
          <p className="movie__duration">{getTimeFromMins(duration)}</p>
        </div>

        {savedMovies ? <button onClick={() => deleteSaveMovie(card._id)} type="button" aria-label="del" className="movie__button-delete"></button> : <button onClick={() => {
          setIsSaved(!isSaved)
          if (isSaved) {
            deleteSaveMovie(card._id)
          } else {
            handleSavedMovie(card)
          }

        }} type="button" aria-label="save" className={isSaved ? "movie__button-save movie__button-save_active" : "movie__button-save"}></button>}

      </div>
      <a className="movie__trailer-link" href={trailerLink}>
        <img src={savedMovies ? image : 'https://api.nomoreparties.co' + image.url} alt="фильм" className="movie__image" />
      </a>
    </li>
  )
}

export default MoviesCard;