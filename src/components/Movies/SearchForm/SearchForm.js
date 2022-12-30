import linegray from '../../../images/stroke-portfolio.svg';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import { useState, useEffect } from 'react';



function SearchForm({ data, isLoad, setSearchedMoviesList, searchedMoviesList }) {

  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log(active)
  }, [active, setActive])

  console.log(data)

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (searchText === '') {
      setError('Нужно ввести ключевое слово')
    }
    const searchedMovies = isLoad && data.filter(movie => {
      console.log(movie)
      return movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchText.toLowerCase())
    })
    console.log(searchedMovies)
    const storageSearchMovies = JSON.parse(localStorage.getItem('search-movies')) || [];

    console.log(storageSearchMovies)
    const allSearchMovies = searchedMovies.concat(storageSearchMovies)

    console.log(allSearchMovies)

    localStorage.setItem('search-movies', JSON.stringify(allSearchMovies))

    setSearchedMoviesList(allSearchMovies)

  }

  const handleFilter = (active) => {
    const initialMovies = JSON.parse(localStorage.getItem('search-movies'))
    console.log(active)
    setActive(!active)

    const filteredMovies = searchedMoviesList.filter(movie => {
      console.log(movie.duration)
      return movie.duration <= 40;
    })
    console.log(filteredMovies)
    active ? setSearchedMoviesList(filteredMovies) : setSearchedMoviesList(initialMovies)
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} >
        <div className="search__input-container">
          <input onChange={evt => setSearchText(evt.target.value)} value={searchText} className="search__input" type="search" name="name" id="name" placeholder="Фильм" required />
          <button className="search__input-button" type='submit'>Найти</button>
        </div>
        <div className='search__filter-container'>
          <p className="search__filter-short">Короткометражки</p>
          <FilterCheckbox active={active} setActive={setActive} handleFilter={handleFilter} />
        </div>
      </form>
      <img src={linegray} alt="линия" className="line-gray" />
    </section>
  )
}

export default SearchForm;

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
