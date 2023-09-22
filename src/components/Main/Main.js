import Promo from "./Promo/Promo"
import AboutProject from "./AboutProject/AboutProject"
import Techs from "./Techs/Techs"
import AboutMe from "./AboutMe/AboutMe"
import Portfolio from "./Portfolio/Portfolio"


import "./Main.css";

export default function Main() {
    return (
        <div className="main">
            {<main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>}
        </div>
    )
}

