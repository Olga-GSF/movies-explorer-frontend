import { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Footer from '../Footer/Footer';
import MoviesApi from '../../utils/MoviesApi';

function Movies() {
  const [isLoad, setIsLoad] = useState(false);
  const [data, setData] = useState([]);
  const storageSearchMovies = JSON.parse(localStorage.getItem('search-movies')) || [];

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
  }, [])

  return (
    <>
      <Header activePage='movies' />
      <SearchForm data={data} isLoad={isLoad} setData={setData} setSearchedMoviesList={setSearchedMoviesList} />
      <MoviesCardList data={data} isLoad={isLoad} searchedMoviesList={searchedMoviesList} />
      <Footer />

    </>
  )
}

export default Movies;