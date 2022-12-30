import MovieCard from "../../MovieCard/MovieCard";
import MoviesApi from "../../../utils/MoviesApi";
import MainApi from "../../../utils/MainApi";
import { useEffect, useState } from "react";
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ data, isLoad, searchedMoviesList }) {

  const [cardsToShow, setCardsToShow] = useState(12);
  const [cardsToAdd, setCardsToAdd] = useState(2);
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
  const [isLoadSaved, setIsLoadSaved] = useState(false);
  const [dataSaved, setDataSaved] = useState([]);
  let cardId;
  // const [cardId, setCardId] = useState();
  // const DESKTOP_WIDTH = 1280;
  // const TABLET_WIDTH = 1199;
  // const MOBILE_WIDTH = 752;


  // const [deleteRerender, setDeleteRerender] = useState(0)
  // const [savedMoviesArr, setSavedMoviesArr] = useState(localStorage.getItem('savedMoviesArr'))

  console.log(searchedMoviesList)

  useEffect(() => {
    MainApi.getSavedMovies()
      .then(data => {
        setDataSaved(data.data)
        // localStorage.setItem('savedMoviesArr', data.data)
        console.log(data)
        setIsLoadSaved(true)
      })
  }, [])

  const checkIsSaved = (savedMovies, movie) => {

    return savedMovies.find((item) => {
      return item.movieId === movie.id
    });
  }


  // const findMovieId = (savedMovies, movie) => {
  //   return savedMovies.map((item) => {

  //     if (item.movieId === movie.id) {
  //       console.log(item._id)
  //       return item._id;
  //     }
  //   });
  // }

  useEffect(() => {
    const resizeW = () => changeDeviceSize(window.innerWidth);
    window.addEventListener("resize", resizeW); // записывает состояние в зависимости от width экрана
    if (deviceSize < 752) {
      setCardsToShow(5);
      setCardsToAdd(2);
    } else if (deviceSize > 752 && deviceSize < 1199) {
      setCardsToShow(8);
    } else {
      setCardsToShow(12);
      setCardsToAdd(3);
    }

    return () => window.removeEventListener("resize", resizeW);
  }, [deviceSize]);

  //console.log(JSON.parse(searchedMoviesList))

  return (
    <>
      <section className="movies">
        <ul className="movies__container">
          {isLoad ? searchedMoviesList.slice(0, cardsToShow).map((card, index) => <MovieCard card={card} key={index} nameRU={card.nameRU} image={card.image} trailerLink={card.trailerLink} duration={card.duration} id={card.id} isSavedStatus={checkIsSaved(dataSaved, card)} />) : <Preloader />}
        </ul>
        {isLoad && searchedMoviesList.length > cardsToShow ? <button onClick={() => setCardsToShow(cardsToShow + cardsToAdd)} className="movies__button-more">Еще</button> : ''}
      </section>
    </>
  )
}

export default MoviesCardList;

// cardDeleteId={findMovieId(dataSaved, card)}