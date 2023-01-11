import linegray from '../../../images/stroke-portfolio.svg';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import { useState, useEffect } from 'react';
import InfoTooltipError from '../../InfoToolTipError/InfoToolTipError';


function SearchForm({ data, isLoad, setSearchedMoviesList, searchedMoviesList }) {
  const [searchText, setSearchText] = useState(localStorage.getItem("search-text"));
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);

  let isActiveFilter = false;

  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log(active);

    const initialMovies = JSON.parse(localStorage.getItem('search-movies'));

    setActive(JSON.parse(localStorage.getItem("filter-status")));
    isActiveFilter = !active;

    const filteredMovies = searchedMoviesList.filter(movie => {
      return movie.duration <= 40;
    })

    JSON.parse(localStorage.getItem("filter-status")) ? setSearchedMoviesList(filteredMovies) : setSearchedMoviesList(initialMovies)

  }, [active])

  // const makeUniq = (arr) => {
  //   const uniqSet = new Set(arr);
  //   return [...uniqSet];
  // }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (searchText === '') {
      setError('Нужно ввести ключевое слово')
      setIsError(true)
    }
    const searchedMovies = isLoad && data.filter(movie => {
      return movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchText.toLowerCase())
    })
    searchedMovies.length === 0 && setInfoTooltipOpen(true)
    if (searchedMovies.length === 0) {
      setError('Ничего не найдено')
      setInfoTooltipOpen(true)
    }

    localStorage.setItem('search-movies', JSON.stringify(searchedMovies))
    setSearchedMoviesList(searchedMovies)

  }

  const handleFilter = () => {
    const initialMovies = JSON.parse(localStorage.getItem('search-movies'))

    setActive(!active)
    isActiveFilter = !active;

    localStorage.setItem("filter-status", isActiveFilter);

    const filteredMovies = searchedMoviesList.filter(movie => {
      return movie.duration <= 40;
    })

    JSON.parse(localStorage.getItem("filter-status")) ? setSearchedMoviesList(filteredMovies) : setSearchedMoviesList(initialMovies)
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} >
        <div className="search__input-container">
          <input onChange={evt => {
            setSearchText(evt.target.value);
            localStorage.setItem("search-text", evt.target.value);
          }} value={searchText} className="search__input" type="search" name="name" id="name" placeholder="Фильм" />

          <button className="search__input-button" type='submit'>Найти</button>
        </div>
        {isError && <span className='search__error'>{error}</span>}
        <div className='search__filter-container'>
          <p className="search__filter-short">Короткометражки</p>
          <FilterCheckbox active={active} handleFilter={handleFilter} />
        </div>

      </form>

      <img src={linegray} alt="линия" className="line-gray" />
      <InfoTooltipError errorMessage={error} isOpen={isInfoTooltipOpen} onClose={setInfoTooltipOpen} />
    </section>
  )
}

export default SearchForm;

// active={active} setActive={setActive}

{/* <section className="search">
<div className="search__form-wrap">
  <form className="search__form">
    <div className="search__input-container">
      <input className="search__input" type="name" name="name" id="name" placeholder="Фильм" required />
      <button className="search__button">Найти</button>
    </div>
    <p className="search__filter-short">Короткометражки</p>
    <FilterCheckbox />
  </form>
  <img src={linegray} alt="линия" className="line-gray" />
</div>
</section> */}