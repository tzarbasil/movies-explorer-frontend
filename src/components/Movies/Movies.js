import SearchForm from "./SearchForm/SearchForm"
import MoviesCardList from "./MoviesCardList/MoviesCardList"

import "./Movies.css";


export default function Movies() {

    return (
        <div className="movies">
            <fieldset className="movies__fieldset">
                <SearchForm />
            </fieldset>
            <MoviesCardList />
        </div>
    )
}

