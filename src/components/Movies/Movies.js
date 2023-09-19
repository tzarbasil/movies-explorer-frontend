import Footer from "../Footer/Footer"
import SearchForm from "./SearchForm/SearchForm"
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox"
import MoviesCardList from "./MoviesCardList/MoviesCardList"

import "./Movies.css";


export default function Movies() {

    return (
        <div className="movies">
            <fieldset className="movies__fieldset">
                <SearchForm />
                <FilterCheckbox />
            </fieldset>
            <MoviesCardList />
            <Footer />
        </div>
    )
}

