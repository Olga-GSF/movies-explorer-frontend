import linegray from '../../../images/stroke-portfolio.svg';

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__form-wrap">
          <div className="search__input-container">
            <input className="search__input" type="name" name="name" id="name" placeholder="Фильм" required />
            <button className="search__button">Найти</button>
          </div>
          <p className="search__filter-short">Короткометражки</p>
          <button className="search__button-on-off"></button>
        </div>
        <img src={linegray} alt="линия" className="line-gray" />
      </form>
    </section>
  )
}

export default SearchForm;
