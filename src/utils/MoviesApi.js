class Api {
  constructor(url) {
    this._url = url;
    this._token = localStorage.getItem('jwt');

    this._getJsonOrError = this._getJsonOrError.bind(this);
    this._getHeaders = this._getHeaders.bind(this);
  }

  _getJsonOrError(res) {
    if (res.ok) {
      return res.json();
    }

    throw new Error('Ошибка при загрузке данных');
  }

  _getHeaders() {
    return {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    }
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`)
      .then(res => this._getJsonOrError(res));
  }

}

const MoviesApi = new Api('https://api.nomoreparties.co')
export default MoviesApi