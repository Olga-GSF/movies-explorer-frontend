import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  const arr = [1, 2, 3];
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