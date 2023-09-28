import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

import { useState, useEffect } from "react";

export default function MoviesCardList({ movies, savedMovies, saveMovie, deleteMovie, formData, savedOnly }) {
    const [showMore, setShowMore] = useState(false)
    const [filteredMovies, setFilteredMovies] = useState(movies)

    useEffect(() => {
        const savedMoviesIDs = savedMovies.map(el => el.movieId)

        const addIsSavedFlag = (el) => {
            if (savedMoviesIDs.includes(el.id)) { return { ...el, isSaved: true, _id: savedMovies.find(e => e.movieId === el.id)._id } }
            return el
        }


        const parsedMovies = savedOnly ?
            movies.filter(el => savedMoviesIDs.includes(el.id)).map(addIsSavedFlag) :
            movies.map(addIsSavedFlag)

        const filterMovies = (movie, key) => {
            if ((!formData.showShort && movie.duration <= 40) || (formData.showShort && movie.duration > 40)) return false
            if (formData.query) return (movie.nameRU.toLowerCase().includes(formData.query.toLowerCase()) || movie.nameEN.toLowerCase().includes(formData.query.toLowerCase()))
            return true
        }
        setFilteredMovies(showMore ? parsedMovies.filter(filterMovies) : parsedMovies.filter(filterMovies).slice(0, 12))
    }, [movies, savedMovies, formData, showMore])

    useEffect(() => {
        setShowMore(false)
    }, [formData])

    return (
        <div className="movie-list">
            <ul className="movie-list__container">
                {filteredMovies.length > 0 && filteredMovies.map((movie, key) => (
                    <MoviesCard
                        movie={movie}
                        key={key}
                        saveMovie={saveMovie}
                        deleteMovie={deleteMovie}
                    />
                ))}
            </ul>
            {((!showMore && filteredMovies.length >= 10)) &&
                <button type="button" className="movie-list__button" onClick={() => { setShowMore(true) }}>Ещё</button>}
        </div>
    );
}