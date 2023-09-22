import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

export default function SearchForm() {
    return (
        <form className="search-form">
            <label className="search-form__label">
                <input className="search-form__input" required placeholder="Фильм" />
                <button type="submit" className="search-form__button">Поиск</button>
            </label>
            <FilterCheckbox />
        </form>
    )
}