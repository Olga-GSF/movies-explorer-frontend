import { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Footer from '../Footer/Footer';
import MoviesApi from '../../utils/MoviesApi';
import InfoTooltipError from '../InfoToolTipError/InfoToolTipError';

function Movies() {
  const [isLoad, setIsLoad] = useState(false);
  const [data, setData] = useState([]);
  const storageSearchMovies = JSON.parse(localStorage.getItem('search-movies')) || [];
  const [error, setError] = useState('');
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);

  // localStorage.setItem('search-movies', [])
  const [searchedMoviesList, setSearchedMoviesList] = useState(storageSearchMovies);
  const { setLoggedIn } = useContext(CurrentUserContext);
  setLoggedIn(true);

  useEffect(() => {
    MoviesApi.getMovies()
      // .then(res => res.json())
      .then(data => {
        if (data) {
          setIsLoad(true);
          setData(data);
        }
      })
      .catch((err) => {
        console.log(err);
        setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        setInfoTooltipOpen(true)
      })
  }, [])

  return (
    <>
      <Header activePage='movies' />
      <SearchForm data={data} isLoad={isLoad} setData={setData} searchedMoviesList={searchedMoviesList} setSearchedMoviesList={setSearchedMoviesList} />
      <MoviesCardList data={data} isLoad={isLoad} searchedMoviesList={searchedMoviesList} />
      <Footer />
      <InfoTooltipError errorMessage={error} isOpen={isInfoTooltipOpen} onClose={setInfoTooltipOpen} />

    </>
  )
}

export default Movies;