import MovieCard from "../../MovieCard/MovieCard";
import MainApi from "../../../utils/MainApi";
import { useEffect, useState } from "react";
import Preloader from "../../Movies/Preloader/Preloader";
import SavedMovies from "../SavedMovies";

function MoviesCardList({ searchedMoviesList }) {

  const [isLoad, setIsLoad] = useState(false)
  const [data, setData] = useState([])
  const [deleteRerender, setDeleteRerender] = useState(0)

  // const [savedMoviesArr, setSavedMoviesArr] = useState(localStorage.getItem('savedMoviesArr'))

  useEffect(() => {
    MainApi.getSavedMovies()
      .then(data => {
        setData(data.data)
        // localStorage.setItem('savedMoviesArr', data.data)
        console.log(data)
        setIsLoad(true)
      })
  }, [deleteRerender])

  return (
    <>
      <section className="saved-movies">
        {
          !isLoad ? <Preloader /> : (
            <ul className="movies__container">
              {searchedMoviesList.map((card, index) => <MovieCard deleteRerender={deleteRerender} setDeleteRerender={setDeleteRerender} card={card} key={index} nameRU={card.nameRU} image={card.image} trailerLink={card.trailerLink} duration={card.duration} id={card.id} />)}
            </ul>
          )
        }
        <div className="movies__devider"></div>
      </section>
    </>
  )
}

export default MoviesCardList;

// savedMoviesArr={savedMoviesArr} setSavedMoviesArr={setSavedMoviesArr}