import SearchForm from "./SearchForm/SearchForm"
import MoviesCardList from "./MoviesCardList/MoviesCardList"

import "./Movies.css";

import { useState } from "react";


export default function Movies({ movies, saveMovie, deleteMovie, savedMovies, setMovies }) {
    const [formData, setFormData] = useState({ showShort: false, query: '' })
    const [isLoading, setIsLoading] = useState(false)

    return (
        <section className="movies">
            <fieldset className="movies__fieldset">
                <SearchForm movies={movies} formData={formData} setFormData={setFormData} setMovies={setMovies} setIsLoading={setIsLoading} />
            </fieldset>
            <MoviesCardList movies={movies} deleteMovie={deleteMovie} saveMovie={saveMovie} savedMovies={savedMovies} formData={formData} isLoading={isLoading} />
        </section>
    )
}

