import MovieCard from "../../MovieCard/MovieCard";
import MoviesApi from "../../../utils/MoviesApi";
import MainApi from "../../../utils/MainApi";
import { useEffect, useState } from "react";
import Preloader from '../Preloader/Preloader';
import { TABLET_WIDTH, MOBILE_WIDTH, CARDS_SHOW_MOBILE, CARDS_ADD_MOBILE, CARDS_SHOW_TABLET, CARDS_SHOW_DESK, CARDS_ADD_DESK } from "../../../utils/const";

function MoviesCardList({ data, isLoad, searchedMoviesList, setSaveRerender, saveRerender }) {

  const [cardsToShow, setCardsToShow] = useState(CARDS_SHOW_DESK);
  const [cardsToAdd, setCardsToAdd] = useState(CARDS_ADD_MOBILE);
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
  const [isLoadSaved, setIsLoadSaved] = useState(false);
  const [dataSaved, setDataSaved] = useState([]);
  // const [saveRerender, setSaveRerender] = useState(0);
  let cardId;
  // const [cardId, setCardId] = useState();
  // const DESKTOP_WIDTH = 1280;
  // const [deleteRerender, setDeleteRerender] = useState(0)
  // const [savedMoviesArr, setSavedMoviesArr] = useState(localStorage.getItem('savedMoviesArr'))


  useEffect(() => {
    MainApi.getSavedMovies()
      .then(data => {
        setDataSaved(data.data)
        console.log(data.data);
        // localStorage.setItem('savedMoviesArr', data.data)
        setIsLoadSaved(true)
      })
  }, [saveRerender])

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
    if (deviceSize < MOBILE_WIDTH) {
      setCardsToShow(CARDS_SHOW_MOBILE);

      setCardsToAdd(CARDS_ADD_MOBILE);
    } else if (deviceSize > MOBILE_WIDTH && deviceSize < TABLET_WIDTH) {
      setCardsToShow(CARDS_SHOW_TABLET);
    } else {
      setCardsToShow(CARDS_SHOW_DESK);
      setCardsToAdd(CARDS_ADD_DESK);
    }

    return () => window.removeEventListener("resize", resizeW);
  }, [deviceSize]);


  return (
    <>
      <section className="movies">
        {
          !isLoad ? <Preloader /> : (
            <ul className="movies__container">
              {searchedMoviesList.slice(0, cardsToShow).map((card) => <MovieCard card={card} key={card.id} nameRU={card.nameRU} image={card.image} trailerLink={card.trailerLink} duration={card.duration} id={card.id} isSavedStatus={checkIsSaved(dataSaved, card)} setSaveRerender={setSaveRerender} saveRerender={saveRerender} />)}
            </ul>
          )
        }
        {isLoad && searchedMoviesList.length > cardsToShow ? <button onClick={() => setCardsToShow(cardsToShow + cardsToAdd)} className="movies__button-more">Еще</button> : ''}
      </section>
    </>
  )
}

export default MoviesCardList;

// cardDeleteId={findMovieId(dataSaved, card)}