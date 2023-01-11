import { useContext, useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchFormSaved from './SearchFormSaved/SearchFormSaved';
import MoviesCardList from '../SavedMovies/MoviesCardList/MoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Footer from '../Footer/Footer';
import InfoTooltipError from '../InfoToolTipError/InfoToolTipError';
import MainApi from '../../utils/MainApi';

function SavedMovies() {
  const { setLoggedIn } = useContext(CurrentUserContext);
  const [isLoad, setIsLoad] = useState(false);
  const [data, setData] = useState([]);

  const [searchedMoviesList, setSearchedMoviesList] = useState([]);

  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [error, setError] = useState('');

  setLoggedIn(true);

  useEffect(() => {
    MainApi.getSavedMovies()
      // .then(res => res.json())
      .then(data => {
        if (data) {
          setIsLoad(true);
          setData(data.data);
          setSearchedMoviesList(data.data);
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
      <Header activePage='saved-movies' />
      <SearchFormSaved data={data} isLoad={isLoad} searchedMoviesList={searchedMoviesList} setSearchedMoviesList={setSearchedMoviesList} />
      <MoviesCardList setSearchedMoviesList={setSearchedMoviesList} searchedMoviesList={searchedMoviesList} />
      <Footer />
      <InfoTooltipError errorMessage={error} isOpen={isInfoTooltipOpen} onClose={setInfoTooltipOpen} />

    </>
  )
}

export default SavedMovies;