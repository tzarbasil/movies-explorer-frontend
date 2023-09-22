import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"


import "./SavedMovies.css";

export default function SavedMovies() {
    return (
        <section className="saved-movies">
            <fieldset className="saved-movies__fieldset">
                <SearchForm />
            </fieldset>
            <MoviesCardList />
        </section>
    )
}

