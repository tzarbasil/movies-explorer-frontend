import "./AboutProject.css";

export default function AboutProject() {
    return (
        <section className="about-project" id="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__container">

                <div className="about-project__subtitle-container">
                    <h3 className="about-project__five">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>

                <div className="about-project__subtitle-container">
                    <h3 className="about-project__five">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className="about-project__deadlines">
                <p className="about-project__week">1 неделя</p>
                <p className="about-project__week about-project__week-4">4 недели</p>
                <p className="about-project__specialisation">Back-end</p>
                <p className="about-project__specialisation">Front-end</p>
            </div>
        </section>
    )
}

