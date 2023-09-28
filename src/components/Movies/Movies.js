import SearchForm from "./SearchForm/SearchForm"
import MoviesCardList from "./MoviesCardList/MoviesCardList"
// import Header from "../Header/Header"

import "./Movies.css";

import { useState } from "react";


export default function Movies({ movies, saveMovie, deleteMovie, savedMovies }) {
    const [formData, setFormData] = useState({ showShort: false, query: '' })

    return (
        <section className="movies">
            <fieldset className="movies__fieldset">
                <SearchForm movies={movies} formData={formData} setFormData={setFormData} />
            </fieldset>
            <MoviesCardList movies={movies} deleteMovie={deleteMovie} saveMovie={saveMovie} savedMovies={savedMovies} formData={formData} />
        </section>
    )
}

