import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../../Preloader/Preloader"
import { useLocation } from "react-router-dom"


import { useState, useEffect } from "react";

export default function MoviesCardList({ movies, savedMovies, saveMovie, deleteMovie, formData, savedOnly, isLoading }) {
    const [filteredMovies, setFilteredMovies] = useState(movies)
    const location = useLocation()


    useEffect(() => {
        const savedMoviesIDs = savedMovies.map(el => el.movieId)
        // const moviesToFilter = movies.length ? movies : savedMovies
        const moviesToFilter = movies

        const addIsSavedFlag = (el) => {
            const movieUniqueId = el.id || el.movieId
            if (savedMoviesIDs.includes(movieUniqueId)) { return { ...el, isSaved: true, _id: savedMovies.find(e => e.movieId === movieUniqueId)._id } }
            return el
        }

        const parsedMovies = savedOnly ?
            moviesToFilter.filter(el => savedMoviesIDs.includes(el.id || el.movieId)).map(addIsSavedFlag) :
            moviesToFilter.map(addIsSavedFlag)

        const filterMovies = (movie, key) => {
            if ((formData.showShort && movie.duration > 40)) return false
            if (formData.query) return (movie.nameRU.toLowerCase().includes(formData.query.toLowerCase()) || movie.nameEN.toLowerCase().includes(formData.query.toLowerCase()))
            return true
        }
        setFilteredMovies(parsedMovies.filter(filterMovies))
    }, [movies, savedMovies, formData, savedOnly])

    const [visibleCards, setVisibleCards] = useState(0)
    const [rowsAdded, setRowsAdded] = useState(0)
    const cardDisplayOptions = [
        { cardsPerRow: 1, visibleRows: 5 },
        { cardsPerRow: 2, visibleRows: 4 },
        { cardsPerRow: 3, visibleRows: 4 },
    ]
    const calcluateVisibleSlides = (rowsAdded = 0) => {
        if (window.innerWidth < 768) { setVisibleCards((rowsAdded * 2 + cardDisplayOptions[0].visibleRows) * cardDisplayOptions[0].cardsPerRow) }
        else if (window.innerWidth < 1201) { setVisibleCards((rowsAdded + cardDisplayOptions[1].visibleRows) * cardDisplayOptions[1].cardsPerRow) }
        else { setVisibleCards((rowsAdded + cardDisplayOptions[2].visibleRows) * cardDisplayOptions[2].cardsPerRow) }
    }


    useEffect(() => {
        calcluateVisibleSlides(rowsAdded)
    }, [rowsAdded])

    useEffect(() => {
        setRowsAdded(0)
        calcluateVisibleSlides()
    }, [window.innerWidth, formData])

    return (
        <div className="movie-list">
            <ul className="movie-list__container">
                {isLoading ?
                    <Preloader /> :
                    (
                        filteredMovies.length > 0 ? (location.pathname !== '/saved-movies' ? filteredMovies.slice(0, visibleCards) : filteredMovies).map((movie, key) => (
                            <MoviesCard
                                movie={movie}
                                key={key}
                                saveMovie={saveMovie}
                                deleteMovie={deleteMovie}
                            />
                        )) : <div className="movie-list__error">Ничего не найдено</div>)
                }
            </ul>
            {((filteredMovies.length >= visibleCards)) && (location.pathname !== '/saved-movies') &&
                <button type="button" className="movie-list__button" onClick={() => { setRowsAdded(rowsAdded + 1) }}>Ещё</button>}
        </div>
    );
}