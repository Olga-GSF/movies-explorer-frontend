import { useContext } from 'react';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../SavedMovies/MoviesCardList/MoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedMovies() {
  const { setLoggedIn } = useContext(CurrentUserContext);
  setLoggedIn(true);
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList />

    </>
  )
}

export default SavedMovies;