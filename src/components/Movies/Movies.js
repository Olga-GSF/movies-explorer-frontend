import { useContext } from 'react';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Footer from '../Footer/Footer';

function Movies() {
  const { setLoggedIn } = useContext(CurrentUserContext);
  setLoggedIn(true);
  return (
    <>
      <Header activePage='movies' />
      <SearchForm />
      <MoviesCardList />
      <Footer />

    </>
  )
}

export default Movies;