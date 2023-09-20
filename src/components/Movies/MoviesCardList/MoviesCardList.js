import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
    return (
        <div className="movie-list">
            <div className="moves-list__test">
                <ul className="movie-list__container">
                    <MoviesCard /> <MoviesCard /> <MoviesCard />
                </ul>
            </div>
            <button type="button" className="movie-list__button">Ещё</button>
        </div>
    );
}