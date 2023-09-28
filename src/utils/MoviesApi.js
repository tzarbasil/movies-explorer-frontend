class MoviesApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _getResponse(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
        }
        return res.json()
    }

    getMovies() {
        return fetch(`${this._url}`, {
            headers: this._headers
        })
            .then(this._getResponse)
    }
}

export const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
});