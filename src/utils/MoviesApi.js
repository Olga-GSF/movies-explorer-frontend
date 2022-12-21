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
    return fetch(`${this.url}/beatfilm-movies`)
  }

  // getInitialCards() {
  //   return fetch(`${this._url}/cards`, {
  //     headers: this._getHeaders(),
  //   })
  //     .then(this._getJsonOrError)
  // }

  // getUserData() {
  //   console.log(this._url);
  //   return fetch(`${this._url}/users/me`, {
  //     headers: this._getHeaders(),
  //   })
  //     .then(this._getJsonOrError)
  // }

  // setUserData(name, about) {
  //   console.log(name);
  //   console.log(about);
  //   return fetch(`${this._url}/users/me`, {
  //     method: 'PATCH',
  //     headers: this._getHeaders(),
  //     body: JSON.stringify({
  //       name,
  //       about
  //     })
  //   })
  //     .then(this._getJsonOrError)
  // }

  // createCard({ name, url }) {
  //   return fetch(`${this._url}/cards`, {
  //     method: 'POST',
  //     headers: this._getHeaders(),
  //     body: JSON.stringify({
  //       name: name,
  //       link: url
  //     })
  //   })
  //     .then(this._getJsonOrError)
  // }

  // deleteCard(id) {
  //   return fetch(`${this._url}/cards/${id}`, {
  //     method: 'DELETE',
  //     headers: this._getHeaders(),
  //   })
  //     .then(this._getJsonOrError)
  // }

  // changeLikeCardStatus(id, isLiked) {
  //   return fetch(`${this._url}/cards/${id}/likes`, {
  //     method: isLiked ? 'PUT' : 'DELETE',
  //     headers: this._getHeaders(),
  //   })
  //     .then(this._getJsonOrError)
  // }
}

const MoviesApi = new Api('https://api.nomoreparties.co')
export default MoviesApi