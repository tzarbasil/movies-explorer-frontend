import SearchForm from "../SearchForm/SearchForm"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import MoviesCardList from "../MoviesCardList/MoviesCardList"

import "./SavedMovies.css";

export default function SavedMovies() {
    return (
        <div className="saved-movies">
            <fieldset className="saved-movies__fieldset">
                <SearchForm />
                <FilterCheckbox />
            </fieldset>
            <MoviesCardList />
        </div>
    )
}

