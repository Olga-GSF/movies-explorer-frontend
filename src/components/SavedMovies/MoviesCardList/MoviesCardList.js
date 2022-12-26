import MovieCard from "../../MovieCard/MovieCard";
import MainApi from "../../../utils/MainApi";
import { useEffect, useState } from "react";
import Preloader from "../../Movies/Preloader/Preloader";
import SavedMovies from "../SavedMovies";

function MoviesCardList() {

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
        <ul className="movies__container">
          {isLoad ? data.map((card, index) => <MovieCard deleteRerender={deleteRerender} setDeleteRerender={setDeleteRerender} card={card} key={index} nameRU={card.nameRU} image={card.image} trailerLink={card.trailerLink} duration={card.duration} id={card.id} />) : <Preloader />}
        </ul>
        <div className="movies__devider"></div>
      </section>
    </>
  )
}

export default MoviesCardList;

// savedMoviesArr={savedMoviesArr} setSavedMoviesArr={setSavedMoviesArr}