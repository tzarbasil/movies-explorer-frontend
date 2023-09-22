import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
    return (
        <div className="movie-list">
                <ul className="movie-list__container">
                    <MoviesCard /> <MoviesCard /> <MoviesCard />
                </ul>
            <button type="button" className="movie-list__button">Ещё</button>
        </div>
    );
}