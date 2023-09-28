class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    })
      .then((res) => this._getResponse(res))
  }

  patchUserInfo(name, email) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      method: 'PATCH',
      body: JSON.stringify({ name, email })
    })
      .then((res) => this._getResponse(res))
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => this._getResponse(res))
  }

  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      method: 'POST',
      body: JSON.stringify({
        movieId: movie.id,
        country: movie.country,
        description: movie.description,
        director: movie.director,
        duration: movie.duration,
        nameEN: movie.nameEN,
        nameRU: movie.nameRU,
        trailerLink: movie.trailerLink,
        year: movie.year,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      })
    })
      .then((res) => this._getResponse(res))
  }

  deleteSavedMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then((res) => this._getResponse(res))
  }

  updateJWTToken(token) {
    this._headers = { ...this._headers, authorization: `Bearer ${localStorage.getItem('jwt')}` }
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
    }
    return res.json();
  }
}

const api = new MainApi({ url: "https://api.diplomtzarbasil.nomoredomainsicu.ru", headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` } });

export default api;