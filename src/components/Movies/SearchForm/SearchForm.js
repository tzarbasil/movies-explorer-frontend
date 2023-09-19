import "./SearchForm.css";

export default function SearchForm() {
    return (
        <div className="search-form">
            <label className="search-form__label">
                <input className="search-form__input" placeholder="Фильм" />
                <button className="search-form__button">Поиск</button>
            </label>
        </div>
    )
}