import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"

import { useState } from "react";

import "./SavedMovies.css";

export default function SavedMovies({ movies, savedMovies, deleteMovie, setMovies }) {
    const [formData, setFormData] = useState({ showShort: false, query: '' })
    const [isLoading, setIsLoading] = useState(false)

    return (
        <section className="saved-movies">
            <fieldset className="saved-movies__fieldset">
                <SearchForm movies={movies} formData={formData} setFormData={setFormData} setIsLoading={setIsLoading} setMovies={setMovies} />
            </fieldset>
            <MoviesCardList movies={movies} savedMovies={savedMovies} formData={formData} savedOnly={true} deleteMovie={deleteMovie} isLoading={isLoading} />
        </section>
    )
}


