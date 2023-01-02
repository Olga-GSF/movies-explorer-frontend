import React, { useState, useEffect } from "react";
// import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import MainApi from "../../utils/MainApi";
import { useLocation } from "react-router-dom";

function MoviesCard({ nameRU, image, trailerLink, duration, id, card, deleteRerender, setDeleteRerender, isSavedStatus }) {
  const [isSaved, setIsSaved] = useState(isSavedStatus);
  const location = useLocation().pathname;
  const savedMovies = (location === '/saved-movies') ? true : false;
  const movies = (location === '/movies') ? true : false;
  const [isLoadSaved, setIsLoadSaved] = useState(false);
  const [dataSaved, setDataSaved] = useState([]);
  const [delCardId, setDelCardId] = useState();
  // const [saveMovies, setSaveMovies] = useState();
  // const [saveId, setSaveId] = useState();
  // const currentUser = React.useContext(CurrentUserContext)


  // console.log(isSavedStatus)

  // useEffect(() => {
  //   MainApi.getSavedMovies()
  //     .then(data => {
  //       setDataSaved(data.data)
  //       // localStorage.setItem('savedMoviesArr', data.data)

  //       setIsLoadSaved(true)
  //     })
  // }, [])

  // console.log(delCardId)
  // isLoadSaved && dataSaved.map(item => {
  //   console.log(item.movieId);
  //   console.log(card.id);
  //   item.movieId === card.id && setDelCardId(item._id)
  // })

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
    console.log(id)
    MainApi.deleteMovie(id)
      .then(data => {
        if (!movies) {
          setDeleteRerender(deleteRerender + 1)
        }
      })
  }

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
            if (movies) {
              MainApi.getSavedMovies()
                .then(data => {
                  console.log(data)
                  data.data.map((movie) => {
                    console.log(movie.movieId === id)
                    if (movie.movieId === id) {
                      deleteSaveMovie(movie._id)
                    }
                  })
                })
            }
          } else {
            handleSavedMovie(card)
          }

        }} type="button" aria-label="save" className={isSaved ? "movie__button-save movie__button-save_active" : "movie__button-save"}></button>}

      </div>
      <a className="movie__trailer-link" target="_blank" rel="noopener noreferrer" href={trailerLink}>
        <img src={savedMovies ? image : 'https://api.nomoreparties.co' + image.url} alt="фильм" className="movie__image" />
      </a>
    </li>
  )
}

export default MoviesCard;