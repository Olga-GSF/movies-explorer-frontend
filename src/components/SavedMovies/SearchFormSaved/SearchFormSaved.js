import linegray from '../../../images/stroke-portfolio.svg';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import { useState, useEffect } from 'react';
import InfoTooltipError from '../../InfoToolTipError/InfoToolTipError';


function SearchFormSaved({ data, isLoad, setSearchedMoviesList, searchedMoviesList }) {

  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);

  let isActiveFilter = false;

  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log(active);
    if (searchText === '') {
      setSearchedMoviesList(data);
    }
    if (searchText !== '') {
      setError('')
      setIsError(false)
    }
    setActive(JSON.parse(localStorage.getItem("filter-status-save")));
    isActiveFilter = !active;

    const filteredMovies = searchedMoviesList.filter(movie => {
      return movie.duration <= 40;
    })

    JSON.parse(localStorage.getItem("filter-status-save")) ? setSearchedMoviesList(filteredMovies) : setSearchedMoviesList(data)

  }, [active, searchText])


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

    setSearchedMoviesList(searchedMovies)

  }

  const handleFilter = () => {

    setActive(!active)
    isActiveFilter = !active;

    localStorage.setItem("filter-status-save", isActiveFilter);

    const filteredMovies = searchedMoviesList.filter(movie => {
      return movie.duration <= 40;
    })

    JSON.parse(localStorage.getItem("filter-status-save")) ? setSearchedMoviesList(filteredMovies) : setSearchedMoviesList(data)
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} >
        <div className="search__input-container">
          <input onChange={evt => setSearchText(evt.target.value)} value={searchText} className="search__input" type="search" name="name" id="name" placeholder="Фильм" />

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

export default SearchFormSaved;

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