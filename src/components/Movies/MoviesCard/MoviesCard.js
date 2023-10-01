import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ movie, saveMovie, deleteMovie }) {
    const location = useLocation();

    function transformDuration(duration) {
        const hours = Math.trunc(duration / 60);
        const minutes = duration % 60;
        if (hours === 0) {
            return `${minutes}м`;
        } else {
            return `${hours}ч ${minutes}м`;
        }
    }

    function handleDeleteMovie(evt) {
        evt.preventDefault();

        deleteMovie(movie._id)
    }

    function handleSaveMovie(evt) {
        evt.preventDefault();

        saveMovie(movie);
    }


    return (
        <div className="movie-card">
            <div className="movie-card__title-container">
                <h2 className="movie-card__title">{movie.nameRU}</h2>
                <p className="movie-card__duration">  {transformDuration(movie.duration)}</p>
            </div>
            <a href={movie.trailerLink}>
            <img className="movie-card__image" src={movie.image.url ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image} alt={movie.name}></img>
        </a>
            {
        movie.isSaved ? (
            <button type="button"
                className={`${location.pathname.includes('/saved-movies') ? 'movie-card__button-delete' : 'movie-card__button-saved'}`}
                onClick={handleDeleteMovie}
            >
            </button>

        ) : (
        <button type="button" onClick={handleSaveMovie}
            className="movie-card__button"
        >
            Сохранить
        </button>
    )
    }

        </div >
    );
}