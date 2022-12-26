import MoviesCard from "../MoviesCard/MoviesCard";
import MainApi from "../../../utils/MainApi";
import { useEffect } from "react";

function MoviesCardList() {

  const arr = [1, 2, 3];

  useEffect(() => {
    MainApi.getSavedMovies()
      .then(data => console.log(data))
  }, [])

  return (
    <>
      <section className="saved-movies">
        <ul className="movies__container">
          {arr.map((card) => <MoviesCard />)}
        </ul>
        <div className="movies__devider"></div>
      </section>
    </>
  )
}

export default MoviesCardList;