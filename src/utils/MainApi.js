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

  changeSaveMovieStatus(id, data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({ id: id }),
    })
      .then(this._getJsonOrError)
  }

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
}

const MainApi = new Api('http://localhost:3002')
export default MainApi