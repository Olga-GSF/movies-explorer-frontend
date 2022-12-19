import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <section className="movies">
        <ul className="movies__container">
          {arr.map((card) => <MoviesCard />)}
        </ul>
        <button className="movies__button-more">Еще</button>
      </section>
    </>
  )
}

export default MoviesCardList;
