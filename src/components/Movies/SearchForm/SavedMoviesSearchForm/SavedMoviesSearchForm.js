import "./SavedMoviesSearchForm.css";
import "../../FilterCheckbox/FilterCheckbox.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"


import api from "../../../../utils/MainApi";

export default function SearchForm({ movies, setIsLoading, formData, setFormData, setSavedMovies }) {
    const location = useLocation()
    const [query, setQuery] = useState('')
    const [errorText, setErrorText] = useState('');

    const handleUserInput = (e) => {
        setQuery(e.target.value)
    }

    const toggleCheckbox = () => {
        setFormData({ query: formData.query, showShort: (!formData.showShort) })
    }

    const fetchSavedMovies = () => {
        if (!movies.length) {
            setIsLoading(true)
            api.getSavedMovies()
                .then((moviesData) => {
                    setSavedMovies(moviesData);
                    localStorage.setItem('saved-movies', JSON.stringify(moviesData));
                })
                .catch((error) => {
                    console.log(`Ошибка: ${error}`);
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }

    const saveQuery = (e) => {
        e.preventDefault()
        if (query === '') {
            return setErrorText(<span className="search-form__span">Нужно ввести ключевое слово</span>)
        } else {
            setErrorText(false)
        }

        setFormData({ ...formData, query })

        fetchSavedMovies()
    }

    return (

        <form className="search-form" onSubmit={saveQuery}>
            <label className="search-form__label">
                <input className="search-form__input"
                    placeholder="Фильм"
                    type="text"
                    name="query"
                    onChange={handleUserInput}
                    value={query || ''}
                />
                <span>{errorText}</span>
                <button type="submit" className="search-form__button">Поиск</button>
            </label>
            <div className="checkbox-container">
                <label className="switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" name="showShort" onChange={toggleCheckbox} checked={formData.showShort} />
                    <div className="slider round"></div>
                    <span className="switch__span">Короткометражки</span>
                </label>
            </div>
        </form>
    )
}