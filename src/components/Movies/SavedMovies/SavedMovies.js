import SavedMoviesSearchForm from "../SearchForm/SavedMoviesSearchForm/SavedMoviesSearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"

import { useState } from "react";

import "./SavedMovies.css";

export default function SavedMovies({ movies, savedMovies, deleteMovie, setSavedMovies }) {
    const [formData, setFormData] = useState({ showShort: false, query: '' })
    const [isLoading, setIsLoading] = useState(false)

    return (
        <section className="saved-movies">
            <fieldset className="saved-movies__fieldset">
                <SavedMoviesSearchForm movies={movies} formData={formData} setFormData={setFormData} setIsLoading={setIsLoading} setSavedMovies={setSavedMovies} />
            </fieldset>
            <MoviesCardList movies={savedMovies} savedMovies={savedMovies} formData={formData} savedOnly={true} deleteMovie={deleteMovie} isLoading={isLoading} />
        </section>
    )
}


