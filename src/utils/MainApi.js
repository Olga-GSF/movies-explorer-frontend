const BASE_URL = "https://api.movies-olga.nomoredomains.icu";
// const BASE_URL = "http://localhost:3002";

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
      Accept: 'application/json',
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    }
  }

  register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
      .then(this._getJsonOrError)
  }

  login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(this._getJsonOrError)
  }

  updateUser = (name, email) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name,
        email
      })
    })
      .then(this._getJsonOrError)
  }

  checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(this._getJsonOrError)
  }

  changeSaveMovieStatus(id, data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({ id: id }),
    })
      .then(this._getJsonOrError)
  }

  getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      headers: this._getHeaders(),
    })
      .then(this._getJsonOrError)
  }

  saveMovie = (data) => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        country: data.country,
        description: data.description,
        director: data.director,
        duration: data.duration.toString(),
        movieId: data.id.toString(),
        image: 'https://api.nomoreparties.co' + data.image.url,
        nameEN: data.nameEN || data.nameRU,
        nameRU: data.nameRU || data.nameEN,
        trailerLink: data.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + data.image.formats.thumbnail.url,
        year: data.year,
      }),
    })
      .then(this._getJsonOrError)
  }

  deleteMovie = (id) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
      method: 'DELETE',
      headers: this._getHeaders(),
    })
      .then(this._getJsonOrError)
  }
}

// const MainApi = new Api('http://localhost:3002')
const MainApi = new Api('https://api.movies-olga.nomoredomains.icu')
export default MainApi

  //   deleteMovie(id) {
  //   return fetch(`${this._url}/movies/${id}`, {
  //     method: 'DELETE',
  //     headers: this._getHeaders(),
  //   })
  //     .then(this._getJsonOrError)
  // }

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

  // changeSaveCardStatus(id, isSaved) {
  //   return fetch(`${this._url}/movies/${id}/saved`, {
  //     method: isSaved ? 'PUT' : 'DELETE',
  //     headers: this._getHeaders(),
  //   })
  //     .then(this._getJsonOrError)
  // }


