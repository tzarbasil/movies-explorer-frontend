import "./Portfolio.css";

import portfolioStrelka from '../../../images/point.svg';

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <nav className="portfolio__link-container">
                <a href="https://github.com/tzarbasil/react-mesto-api-full-gha" target="_blank" className="portfolio__link" >Статичный сайт <img className="portfolio__link-point" src={portfolioStrelka} alt="ссылка"></img></a>
                <a href="https://github.com/tzarbasil/russian-travel" target="_blank" className="portfolio__link">Адаптивный сайт <img className="portfolio__link-point" src={portfolioStrelka} alt="ссылка"></img></a>
                <a href="https://github.com/tzarbasil/how-to-learn" target="_blank" className="portfolio__link">Одностраничное приложение <img className="portfolio__link-point" src={portfolioStrelka} alt="ссылка"></img></a>
            </nav>
        </section>
    )
}


