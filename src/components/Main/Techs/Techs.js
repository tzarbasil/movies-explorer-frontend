import "./Techs.css";

export default function Techs() {
    return (
        <section className="techs">
            <div className="techs__container">
                <h2 className="techs__title">Технологии</h2>
                <h3 className="techs__list">7 технологий</h3>
                <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__stack-list">
                    <li className="techs__stack-element">HTML</li>
                    <li className="techs__stack-element">CSS</li>
                    <li className="techs__stack-element">JS</li>
                    <li className="techs__stack-element">React</li>
                    <li className="techs__stack-element">Git</li>
                    <li className="techs__stack-element">Express.js</li>
                    <li className="techs__stack-element">mongoDB</li>
                </ul>
            </div>
        </section>
    )
}

