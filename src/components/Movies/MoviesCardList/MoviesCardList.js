import MovieCard from "../../MovieCard/MovieCard";
import MoviesApi from "../../../utils/MoviesApi";
import MainApi from "../../../utils/MainApi";
import { useEffect, useState } from "react";
import Preloader from '../Preloader/Preloader';

function MoviesCardList() {
  const [isLoad, setIsLoad] = useState(false);
  const [data, setData] = useState([]);
  const [cardsToShow, setCardsToShow] = useState(12);
  const [cardsToAdd, setCardsToAdd] = useState(2);
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
  // const DESKTOP_WIDTH = 1280;
  // const TABLET_WIDTH = 1199;
  // const MOBILE_WIDTH = 752;

  const [isLoadSaved, setIsLoadSaved] = useState(false)
  const [dataSaved, setDataSaved] = useState([])
  const [isSaved, setIsSaved] = useState(false);
  // const [deleteRerender, setDeleteRerender] = useState(0)

  // const [savedMoviesArr, setSavedMoviesArr] = useState(localStorage.getItem('savedMoviesArr'))

  useEffect(() => {
    MainApi.getSavedMovies()
      .then(data => {
        setDataSaved(data.data)
        // localStorage.setItem('savedMoviesArr', data.data)
        console.log(data)
        setIsLoadSaved(true)
      })
  }, [])

  useEffect(() => {
    MoviesApi.getMovies()
      // .then(res => res.json())
      .then(data => {
        if (data) {
          setIsLoad(true);
          setData(data);
        }
      })
  }, [])

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

  return (
    <>
      <section className="movies">
        <ul className="movies__container">
          {isLoadSaved && dataSaved.map((el) => {
            isLoad ? data.slice(0, cardsToShow).map((card, index) => {
              // el._id === card.id && setIsSaved(true)
              // console.log(el._id, card.id)
              return (<MovieCard card={card} key={index} nameRU={card.nameRU} image={card.image} trailerLink={card.trailerLink} duration={card.duration} id={card.id} isSaved={isSaved} setIsSaved={setIsSaved} />)
            }) : <Preloader />
          })}
          {/* {isLoad ? data.slice(0, cardsToShow).map((card, index) => <MovieCard card={card} key={index} nameRU={card.nameRU} image={card.image} trailerLink={card.trailerLink} duration={card.duration} id={card.id} />) : <Preloader />} */}
        </ul>
        {isLoad && data.length > cardsToShow ? <button onClick={() => setCardsToShow(cardsToShow + cardsToAdd)} className="movies__button-more">Еще</button> : ''}
      </section>
    </>
  )
}

export default MoviesCardList;
