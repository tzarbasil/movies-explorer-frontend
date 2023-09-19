import "./Promo.css";
import { Link } from "react-router-dom";
import promoImg from '../../../images/web_image.png';

export default function Promo() {
    return (
        <div className="promo">
            <div className="promo__container">
                <h2 className="promo__title">Учебный проект студента факультета <span style={{ whiteSpace: 'nowrap' }}>Веб-разработки.</span></h2>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <Link className="promo__link"> Узнать больше </Link>
            </div>
            <img className="promo__image" src={promoImg} alt="Логотип проекта" />
            {/* навтаб promo__link*/}
        </div>
    )
}

