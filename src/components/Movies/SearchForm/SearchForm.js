import "./SearchForm.css";
import "../FilterCheckbox/FilterCheckbox.css";
import { useEffect, useState } from "react";

export default function SearchForm({ movies, formData, setFormData }) {
    const [query, setQuery] = useState('')

    useEffect(() => {
        const LSData = localStorage.getItem('mainFormFilters')
        if (!LSData) return
        setFormData({ ...formData, query: JSON.parse(LSData) })
        setQuery(JSON.parse(LSData))
    }, [])

    const handleUserInput = (e) => {
        setQuery(e.target.value)
    }

    const toggleCheckbox = () => {
        setFormData({ ...formData, showShort: !formData.showShort })
    }

    const saveQuery = (e) => {
        e.preventDefault()
        setFormData({ ...formData, query })
        localStorage.setItem('mainFormFilters', JSON.stringify(query))
    }

    return (

        <form className="search-form" onSubmit={saveQuery}>
            <label className="search-form__label">
                <input className="search-form__input"
                    placeholder="Фильм"
                    type="text"
                    name="query"
                    onChange={handleUserInput}
                    value={query}

                />
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