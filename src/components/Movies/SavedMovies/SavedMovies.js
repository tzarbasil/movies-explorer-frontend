import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"

import { useState } from "react";

import "./SavedMovies.css";

export default function SavedMovies({ movies, savedMovies, deleteMovie }) {
    const [formData, setFormData] = useState({ showShort: false, query: '' })
    return (
        <section className="saved-movies">
            <fieldset className="saved-movies__fieldset">
                <SearchForm movies={movies} formData={formData} setFormData={setFormData} />
            </fieldset>
            <MoviesCardList movies={movies} savedMovies={savedMovies} formData={formData} savedOnly={true} deleteMovie={deleteMovie} />
        </section>
    )
}


