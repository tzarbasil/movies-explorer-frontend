class Authorization {
  constructor({ url }) {
    this._url = url;
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(this._getResponse);
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then(this._getResponse);
  }

  checkToken(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`
      }
    })
      .then(this._getResponse);
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject({ message: `Ошибка: ${res.status} ${res.statusText}`, status: res.status });
    }
    return res.json();
  }
}

const auth = new Authorization({ url: "https://api.diplomtzarbasil.nomoredomainsicu.ru" });

export default auth;