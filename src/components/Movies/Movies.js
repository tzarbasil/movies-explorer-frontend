import SearchForm from "./SearchForm/SearchForm"
import MoviesCardList from "./MoviesCardList/MoviesCardList"
// import Header from "../Header/Header"

import "./Movies.css";


export default function Movies() {

    return (
        <section className="movies">
            
            <fieldset className="movies__fieldset">
                <SearchForm />
            </fieldset>
            <MoviesCardList />
        </section>
    )
}

