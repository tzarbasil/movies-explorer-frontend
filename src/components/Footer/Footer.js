import "./Footer.css";


export default function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__container">
                <p className="footer__year">©2023</p>
                <ul className="footer__links">
                    <a className="footer__link" target="_blank" href='https://practicum.yandex.ru'>Яндекс.Практикум</a>
                    <a className="footer__link" target="_blank" href="https://github.com/tzarbasil">Github</a>
                </ul>
            </div>
        </footer>
    )
}