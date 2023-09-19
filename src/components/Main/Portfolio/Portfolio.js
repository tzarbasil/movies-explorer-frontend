import "./Portfolio.css";

import portfolioStrelka from '../../../images/point.svg';

export default function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__link-container">
                <a href="https://github.com/tzarbasil/react-mesto-api-full-gha" className="portfolio__link" >Статичный сайт <img className="portfolio__link-point" src={portfolioStrelka} alt="ссылка"></img></a>
                <a href="https://github.com/tzarbasil/russian-travel" className="portfolio__link">Адаптивный сайт <img className="portfolio__link-point" src={portfolioStrelka} alt="ссылка"></img></a>
                <a href="https://github.com/tzarbasil/how-to-learn" className="portfolio__link">Одностраничное приложение <img className="portfolio__link-point" src={portfolioStrelka} alt="ссылка"></img></a>
            </div>
        </div>
    )
}


