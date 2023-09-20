import "./AboutMe.css";
import AboutMePicture from '../../../images/profilePicture.jpg';


export default function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__description-container">
                    <h3 className="about-me__name">Василий</h3>
                    <p className="about-me__job">Фронтенд-разработчик, 20 лет</p>
                    <p className="about-me__description">Я родился в Москве, закончил колледж по специальности звукорежиссёра. Занимаюсь уличной, архитетурной
                        и репортажной фотографией. С 2022-го года обучаюсь на курсе "Веб-разработчик" от Яндекс.Практикума. </p>
                    <a href="https://github.com/tzarbasil" className="about-me__link" target="_blank">Github</a>
                </div>
                <img className="about-me__photo" src={AboutMePicture} alt="Фото студента"></img>
            </div>
        </section>
    )
}

