import "./MoviesCard.css";
import film_image from '../../../images/pic__COLOR_pic.png';
import film_button from '../../../images/save6d.svg';


export default function MoviesCard(props) {
    return (
        <div className="movie-card__container">
            <div className="movie-card___title-container">
                <h2 className="movie-card__title">В погоне за Бенкси</h2>
                <p className="movie-card__duration">0ч 42м</p>
            </div>

            <img className="movie-card__image" src={film_image} alt={props.filmName}></img>
            <button type="button" className="movie-card__button">
                <img className="movie-card__button-image" src={film_button} alt="Кнопка добавления\удаления фильма"></img>
            </button>
        </div>
    );
}