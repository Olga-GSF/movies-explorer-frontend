import linegray from '../../../images/stroke-portfolio.svg';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__input-container">
          <input className="search__input" type="name" name="name" id="name" placeholder="Фильм" required />
          <button className="search__input-button" type='submit'>Найти</button>
        </div>
        <div className='search__filter-container'>
          <p className="search__filter-short">Короткометражки</p>
          <FilterCheckbox />
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
