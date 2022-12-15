import { useContext } from 'react';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../SavedMovies/MoviesCardList/MoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Footer from '../Footer/Footer';

function SavedMovies() {
  const { setLoggedIn } = useContext(CurrentUserContext);
  setLoggedIn(true);
  return (
    <>
      <Header activePage='saved-movies' />
      <SearchForm />
      <MoviesCardList />
      <Footer />

    </>
  )
}

export default SavedMovies;